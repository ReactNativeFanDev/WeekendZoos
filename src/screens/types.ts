import type { NativeStackScreenProps } from '@react-navigation/native-stack';

type RootStackParamList = {
    MainScreen: undefined;
    ZooScreen: { item: any };
    CameraPhoto: {zooScreen: string};
    Gallery: {zooScreen: string};
    MapScreen: {zooAddress: any, markerTitle: string};
};

export type PropsMainScreen = NativeStackScreenProps<RootStackParamList, 'MainScreen'>;
export type PropsZooScreen = NativeStackScreenProps<RootStackParamList, 'ZooScreen'>;
export type PropsCameraPhoto = NativeStackScreenProps<RootStackParamList, 'CameraPhoto'>;
export type PropsGallery = NativeStackScreenProps<RootStackParamList, 'Gallery'>;
export type PropsMapScreen = NativeStackScreenProps<RootStackParamList, 'MapScreen'>;