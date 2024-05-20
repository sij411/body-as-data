'use client'
import React, { useRef, useEffect, useState } from 'react';
import styles from './Webcam.module.css';

export default function Webcam() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [showPopup, setShowPopup] = useState(false);
  const [popupContent, setPopupContent] = useState('');

  useEffect(() => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
          }
        })
        .catch(err => console.error(err));
    }
  }, []);

  const savePhotoData = async () => {
    if (videoRef.current && canvasRef.current) {
      const video = videoRef.current;
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');

      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      context?.drawImage(video, 0, 0, video.videoWidth, video.videoHeight);
      const dataUrl = canvas.toDataURL('image/png');
      let base64Image = dataUrl.replace(/^data:image\/[^;]+;base64,/, "");

      const partialDataUrl = base64Image.substring(0, 100);

      const response = await fetch('/api', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ partialDataUrl })
        })
        .then(data => {
          console.log('Success:', data);
          setShowPopup(true);
          setPopupContent((partialDataUrl as string).repeat(30));

          setTimeout(() => {
            setShowPopup(false);
          }, 5000);
        })
        .catch(err => console.error(err, 'Failed to save partialDataUrl'));
    }
  };

  return (
    <>
      <video ref={videoRef} autoPlay onClick={savePhotoData} style={{ pointerEvents: 'auto', width: '100vw', height: '100vh', objectFit: 'cover'}}/>
      <canvas ref={canvasRef} style={{ display: 'none' }} />

      {showPopup && (
        <div className="fixed top-0 left-0 w-screen h-screen bg-[#FF80FB] overflow-hidden">
          <div className={styles.photoDataContainer}>{popupContent}</div>
          <button onClick={() => setShowPopup(false)}>Close</button>
        </div>
      )}
    </>
  );
}