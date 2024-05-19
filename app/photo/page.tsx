'use client'
import { useEffect, useState } from 'react';

export default function Photo() {
    const [photoData, setPhotoData] = useState(null);
    const getData = async () => {
        try {
            const response = await fetch('/api');
            const data = await response.json();
            console.log('API response:', data);
            if (data.success) {
                setPhotoData(data.base64Photo);
            } else {
                console.log(data.message);
            }
            console.log(photoData);

        } catch (e) {
            console.error(e);
        }
    }

    useEffect(() => {
        console.log(photoData);
        getData();
    }, [photoData]);

    
    return (
        <p className="text-black">{photoData}</p>
    );
}