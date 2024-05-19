'use client'

import React, { useRef, useEffect } from 'react';

export default function Webcam() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

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

  return <video ref={videoRef} autoPlay />;
}
class WebCamComponent {
  private canvas: HTMLCanvasElement;
  private context: CanvasRenderingContext2D;
  private video: HTMLVideoElement;
  private w: number;
  private h: number;

  constructor() {
    this.canvas = document.createElement('canvas');


    // @ts-ignore
    this.context = this.canvas.getContext("2d");
    if (this.context === null) {
      throw new Error("Unable to get 2D context for canvas");
    }
    this.video = document.createElement('video');
    this.w = 100;
    this.h = 100;
  }

  snapshot() {
    this.context.fillRect(0, 0, this.w, this.h);
    this.context.drawImage(this.video, 0, 0, this.w, this.h);
    this.canvas.style.display = "block";

    // Get the data URL of the image
    let imageDataUrl = this.canvas.toDataURL("image/png");
    let base64Image = imageDataUrl.replace(/^data:image\/[^;]+;base64,/, "");

// Send the Base64 string to your server
    fetch('/api/save', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({photo: base64Image})
    })
    .then(response => response.json())
    .then(data => {
          console.log(data);
          window.location.href = "/photo-view";
        }
    ).catch(error => console.error('Error:', error));

  }



  firstUpdated() {
    window.navigator.mediaDevices.getUserMedia({ video: true, audio: true })
    .then(stream => {
      this.video.srcObject = stream;
      this.video.onloadedmetadata = (e) => {
        this.video.play();

        this.video.width = this.w;
        this.video.height = this.h;
        this.video.style.width = '100%';
        this.video.style.height = '100%';
        this.video.style.objectFit = 'fill';

      };
      this.video.addEventListener('click', this.snapshot.bind(this));
    })
    .catch(error => {
      alert('You have to enable the mic and the camera');
    });
  }

  render() {
    return `
      <div style="width: 100vw; height: 100vh; margin: 0">
      ${this.video}
      </div>
      <br>
    `;
  }
};

