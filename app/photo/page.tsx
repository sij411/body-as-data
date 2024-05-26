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
                <svg width="50" height="30" viewBox="0 0 127 68" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.90909 2.66666C16.5892 2.66666 31.2694 2.66666 45.9495 2.66666C65.2129 2.66666 86.1812 0.488638 104.67 7.04376C114.519 10.5355 123.699 16.3323 124.805 27.5151C125.091 30.4108 125.644 34.8312 124.199 37.4815C121.969 41.5687 116.786 43.8556 112.684 45.3939C95.7409 51.7474 76.6613 52.7836 58.7441 52.33C49.9851 52.1082 41.823 48.6204 32.9529 48.7273C31.0938 48.7497 23.7273 50.8975 23.7273 48.7273C23.7273 46.9444 23.7105 45.1044 25.2424 43.8788C29.9039 40.1496 36.2468 36.9607 41.6061 34.1818C45.3299 32.2509 45.0579 33.0609 42.3805 35.4949C38.0345 39.4458 33.5058 42.7562 28.4411 45.697C26.1468 47.0291 19.0902 49.5032 21.7071 49.9394C27.8959 50.9708 32.7164 55.343 38.2054 58.0875C42.4473 60.2085 46.566 64.219 51 65.697" stroke="black" stroke-width="10" stroke-linecap="round"/>
</svg>

                </Link>
            </div>
        </div>
    );
}