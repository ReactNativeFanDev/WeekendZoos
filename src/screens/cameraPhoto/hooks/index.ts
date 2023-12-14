import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../../navigation/types';

interface UseTranslatedResult {
    addPhoto: (photo: any) => void;
}


export default function PhotoHook({ zooName }: any): UseTranslatedResult {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    const addPhoto = async (photo: any) => {


        function saveData(data: any) {
            const jsonString = JSON.stringify([...data, photo.path]);

            AsyncStorage.setItem(`keyForPhotos${zooName}`, jsonString)
                .then(() => {
                    navigation.goBack();
                })
        }

        const photoData = await AsyncStorage.getItem(`keyForPhotos${zooName}`)

        if (photoData) {
            const parsedPhotos = JSON.parse(photoData);
            saveData(parsedPhotos);
        } else {
            saveData([]);
        }
    };

    return { addPhoto };
}
