import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';

interface UseTranslatedResult {
    photoData: any;
}



export default function PhotoHook({ zooName }: any): UseTranslatedResult {
    const [photoData, setPhotoData] = useState();

    async function getPhoto() {
        try {
            const data = await AsyncStorage.getItem(`keyForPhotos${zooName}`)

            if (data) {
                const parsedPhotos = JSON.parse(data);
                setPhotoData(parsedPhotos.reverse());
            } else {
                setPhotoData(undefined);
            }
        } catch (error) {
        }
    }

    useEffect(() => {
        getPhoto();
    }, [])

    return { photoData };
}
