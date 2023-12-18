import React, { useRef } from "react";
import { FlatList } from "react-native";
import PhotoHook from "./hooks";
import { PhotoListItem } from "../../component";
import { Ratio } from "../../constants/Global";
import { PropsGallery } from "../types";


export const Gallery: React.FC<PropsGallery> = ({ route }) => {
    const flatListRef = useRef<FlatList | null>(null);
    const { photoData } = PhotoHook({ zooName: route.params.zooScreen });

    const scrollToItem = (index: number) => {
        flatListRef.current?.scrollToIndex({ index });
    };

    const handleScroll = (event: any) => {
        if (photoData?.length > 0) {
            const index = Math.round((event.nativeEvent.contentOffset.x + (Ratio.deviceWidth * 1)) / (Ratio.deviceWidth));
            scrollToItem(index - 1);
        }
    };

    return (
        <FlatList
            ref={flatListRef}
            data={photoData}
            renderItem={({ item }) => <PhotoListItem item={item} />}
            onMomentumScrollEnd={handleScroll}
            horizontal={true}
            bounces={false}
            scrollEventThrottle={16}
            showsHorizontalScrollIndicator={false}
            style={{ flex: 1, backgroundColor: '#000' }}
        />
    )
}