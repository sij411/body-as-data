'use client'
import { useEffect, useState } from 'react';

export default function Photo() {
    const [photoData, setPhotoData] = useState(null);
    const getData = async () => {
        try {
            const response = await fetch('/api');
            const data = await response.json();
            console.log('API response:', data);
            
            const base64Data = data.base64Data;
            setPhotoData(base64Data);
            console.log('Photo data:', base64Data);
            
        } catch (e) {
            console.error(e);
        }
    }

    useEffect(() => {
        getData();
        const timer = setTimeout(() => {
            window.location.href = '/webcam'; // replace with your URL
        }, 5000);
    
        return () => clearTimeout(timer); // cleanup on unmount
    });

    return (
        <div className='bg-[#FF80FB] w-screen h-screen flex flex-col items-center justify-center overflow-y-auto'>
          <p className="text-[#0CBA00] text-[200px] w-full text-center whitespace-pre-wrap overflow-wrap break-word tracking-wide">  
              {photoData}
          </p>
          <p className="text-[#0CBA00] text-[200px] w-full text-center whitespace-pre-wrap overflow-wrap break-word tracking-widest">  
              {photoData}
          </p>
          <p className="text-[#0CBA00] text-[200px] w-full text-center whitespace-pre-wrap overflow-wrap break-word tracking-wider ">  
              {photoData}
          </p>
          <p className="text-[#0CBA00] text-[200px] w-full text-center whitespace-pre-wrap overflow-wrap break-word tracking-wide ">  
              {photoData}
          </p>
          <p className="text-[#0CBA00] text-[200px] w-full text-center whitespace-pre-wrap overflow-wrap break-word tracking-widest">  
              {photoData}
          </p>
        </div>
      );
}