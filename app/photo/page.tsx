'use client'
import { useEffect, useState } from 'react';
import styles from './Photo.module.css';
import Link from 'next/link';

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
        /*
        const timer = setTimeout(() => {
            window.location.href = '/webcam'; // replace with your URL
        }, 5000);
    
        return () => clearTimeout(timer); // cleanup on unmount
        */
    });

    return (
        <div className='bg-[#FF80FB] w-screen h-screen  overflow-hidden'>
            <div id="photo-data-container" className={styles.photoDataContainer}>  
                {photoData !== null ? (photoData as string).repeat(30) : ''}
            </div>

            <div id='return-to-main-button' className='fixed bottom-16 right-20'>
                <Link href='/webcam'>
                <button className='rounded-s bg-[#0CBA00] px-1 text-center'>RETURN</button>
                </Link>
            </div>
        </div>
    );
}