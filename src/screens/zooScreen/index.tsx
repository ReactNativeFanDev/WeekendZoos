import React, { useEffect } from "react";
import { Image, Platform, Pressable, ScrollView, Text, View } from "react-native";
import { NavigationProp, RouteProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../navigation/types";
import { styles } from "./styles";
import { useCameraPermission } from "react-native-vision-camera";


type PropsZooScreen = {
    route: RouteProp<RootStackParamList, "ZooScreen">; // Replace with the actual screen name
};

export const ZooScreen: React.FC<PropsZooScreen> = ({ route }) => {
    const { name, uri, description, nearbyHotel, rarestAnimal, rarestAnimalPhoto, zooAddress } = route.params.item;
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const { hasPermission, requestPermission } = useCameraPermission()

    function openCamera() {
        navigation.navigate('CameraPhoto', { zooScreen: name });
    }

    function openGallery() {
        navigation.navigate('Gallery', { zooScreen: name });
    }

    function openMap() {
        navigation.navigate('MapScreen', {zooAddress: zooAddress, markerTitle: name});
    }

    useEffect(() => {
        if (Platform.OS == 'android') {
            requestPermission();
        }
    }, [])

    return (
        <ScrollView style={styles.container}>
            <Image
                style={styles.zooImageContainer}
                source={{ uri: uri }}
            />

            <View style={styles.buttonsContainer}>
                <Pressable onPress={openMap} style={({ pressed }) => pressed && styles.onPress}>
                    <Image
                        source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Flag-map_of_Australia.svg/2195px-Flag-map_of_Australia.svg.png' }}
                        style={styles.mapContainer}
                    />
                </Pressable>

                <View style={styles.zooNameContainer}>
                    <Text style={styles.zooName}>
                        {name}
                    </Text>
                </View>
            </View>

            <View style={styles.buttonsContainer}>
                <View style={styles.animalBorder}>
                    <Image
                        source={{ uri: rarestAnimalPhoto }}
                        style={styles.mapContainer}
                    />
                </View>

                <Pressable onPress={openCamera} style={({ pressed }) => pressed && styles.onPress}>
                    <Image
                        source={{ uri: 'https://cdn-icons-png.flaticon.com/512/5655/5655351.png' }}
                        style={[styles.mapContainer, {backgroundColor: '#FFFFFF'}]}
                    />
                </Pressable>

                <Pressable onPress={openGallery} style={({ pressed }) => pressed && styles.onPress}>
                    <Image
                        source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1902/1902786.png' }}
                        style={styles.mapContainer}
                    />
                </Pressable>
            </View>

            <View style={styles.description}>
                <Text style={styles.descriptionText}>
                    {description}
                    {nearbyHotel}
                    {rarestAnimal}
                </Text>
            </View>
        </ScrollView>
    );
};

