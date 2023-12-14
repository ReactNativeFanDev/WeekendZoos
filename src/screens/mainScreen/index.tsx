import React, { useCallback, useEffect } from "react";
import { FlatList } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import SplashScreen from 'react-native-splash-screen';

import { Data } from "../../constants/Data";
import { ZooListItem } from "../../component";
import { styles } from "./styles";
import shareHook from "./hooks";

export const MainScreen = (): JSX.Element => {
    const { shareContent } = shareHook({zooNameList: Data});

    useFocusEffect(
        useCallback(() => {
            shareContent();
        }, [])
    );

    useEffect(() => {
        SplashScreen.hide();
    }, [])

    return (
        <FlatList style={styles.container}
            data={Data}
            renderItem={({ item }) => <ZooListItem item={item} />}
            showsVerticalScrollIndicator={false}
        />
    );
};