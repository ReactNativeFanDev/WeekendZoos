import AsyncStorage from "@react-native-async-storage/async-storage";
import { Share } from "react-native";


interface UseTranslatedResult {
    shareContent: () => void;
}


export default function shareHook({ zooNameList }: any): UseTranslatedResult {

    const shareContent = async () => {
        try {
            const list = await Promise.all(zooNameList.map(async (item: any) => {
                const photoData = await AsyncStorage.getItem(`keyForPhotos${item.name}`);
                return !!photoData; // Повертаємо true, якщо photoData не пустий (існує)
            }));

            if (list.every((value) => value === true)) {
                await Share.share({
                    message: 'i did it',
                    title: 'Helloo',
                    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZAM4x-Noj78kZGjIZ9l2OyZbhGqscXTbze7_Ym1papQ&s'
                }).then(() => {

                });
            } else {

            }
        } catch (error) {
            console.error("Помилка при отриманні даних з AsyncStorage:", error);
        }
    };


    return { shareContent };
}