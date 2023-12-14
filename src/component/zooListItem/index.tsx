import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../navigation/types";
import { styles } from "./styles";

interface Props {
    item: any,
};

export const ZooListItem = ({ item }: Props): JSX.Element => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    function itemPressHandler() {
        navigation.navigate('ZooScreen', { item: item });
    }

    return (
        <Pressable onPress={itemPressHandler} style={({ pressed }) => [styles.container, pressed && styles.onPress]}>
            <Image
                source={{ uri: item.uri }}
                style={styles.photo}
            />

            <View style={styles.nameContainer}>
                <Text style={styles.zooName}>
                    {item.name}
                </Text>
            </View>
        </Pressable>
    );
};