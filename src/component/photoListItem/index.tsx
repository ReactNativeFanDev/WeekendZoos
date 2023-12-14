import React from "react";
import { Image } from "react-native";
import { Ratio } from "../../constants/Global";


interface Props {
    item: any,
};

export const PhotoListItem = ({ item }: Props): JSX.Element => {
    return (
        <Image
            style={{width: Ratio.deviceWidth, height: Ratio.deviceHight}}
            source={{ uri: item }}
        />
    );
};
