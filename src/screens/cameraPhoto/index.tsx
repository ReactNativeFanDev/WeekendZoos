import React, { useRef } from "react";
import { Camera, useCameraDevice } from "react-native-vision-camera";
import { Pressable, StyleSheet } from "react-native";
import { styles } from "./styles";
import PhotoHook from "./hooks";
import { PropsCameraPhoto } from "../types";

export const CameraPhoto: React.FC<PropsCameraPhoto> = ({ route }) => {
    const camera = useRef<Camera>(null)
    const device = useCameraDevice('back')

    const { addPhoto } = PhotoHook({ zooName: route.params.ZooScreen });

    async function takePhoto() {
        try {
            const photo = await camera.current?.takePhoto();
            addPhoto(photo);
        } catch (error) {
            console.log(error)
        }
    }

    if (device == null) return <></>

    return (
        <>
            <Camera
                ref={camera}
                style={StyleSheet.absoluteFill}
                device={device}
                isActive={true}
                photo={true}
            />

            <Pressable
                onPress={takePhoto}
                style={({ pressed }) => [styles.button, pressed && styles.onPress]}
            />
        </>
    )
}

