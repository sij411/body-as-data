'use client'

import React, { useRef, useEffect } from 'react';
import {useRouter} from 'next/navigation';

export default function Webcam() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const router = useRouter();

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
          //router.push('/photo')
        }
        )
        .catch(err => console.error(err, 'Failed to save partialDataUrl'))
        ;       
  };
    }

  return <>
     
    <video ref={videoRef} autoPlay onClick={savePhotoData} style={{ pointerEvents: 'auto', width: '100vw', height: '100vh', objectFit: 'cover'}}/>
    <canvas ref={canvasRef} style={{ display: 'none' }} />
</>
}

