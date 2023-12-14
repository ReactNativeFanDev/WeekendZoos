import React, { useState } from "react";
import MapView, { Marker, Polyline } from 'react-native-maps';
import { View } from "react-native";
import { PropsMapScreen } from "../types";
import { mapStyle } from "./mapStyle";
import { styles } from "./styles";

export const MapScreen: React.FC<PropsMapScreen> = ({ route }) => {
    const [directions, setDirections] = useState<any>(null);
    const [region, setRegion] = useState({
        latitude: route.params.zooAddress.latitude,
        longitude: route.params.zooAddress.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    });

    const [markers, setMarkers] = useState([
        { latlng: route.params.zooAddress, title: route.params.markerTitle },
    ]);




    return (
        <View style={styles.container}>
            <MapView
                region={region}
                style={styles.mapStyle}
                customMapStyle={mapStyle}
            >
                {markers.map((marker, index) => (
                    <Marker
                        key={index}
                        coordinate={marker.latlng}
                        title={marker.title}
                    />
                ))}

                {/* Відобразити лінію маршруту, якщо вона є */}
                {directions && (
                    <Polyline
                        coordinates={directions}
                        strokeWidth={3}
                        strokeColor="hotpink"
                    />
                )}

            </MapView>
        </View>
    );
};




