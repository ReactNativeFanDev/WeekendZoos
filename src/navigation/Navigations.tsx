import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { RootStackParamList } from './types';
import { CameraPhoto, Gallery, MainScreen, MapScreen, ZooScreen } from '../screens';


const Stack = createNativeStackNavigator<RootStackParamList>();


export const Navigations = (): JSX.Element => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: { backgroundColor: '#080e1c' },
                headerTintColor: '#FFF',
            }}
        >
            <Stack.Screen
                name="MainScreen"
                component={MainScreen}

                options={{
                    headerShown: false,
                    title: 'Zoo list'
                }}
            />
            <Stack.Screen
                name="ZooScreen"
                component={ZooScreen}
                options={{
                    title: ''
                }}
            />
            <Stack.Screen
                name="CameraPhoto"
                component={CameraPhoto}
                options={{
                    title: 'Take photo'
                }}
            />
            <Stack.Screen
                name="Gallery"
                component={Gallery}
                options={{
                    title: 'Gallery'
                }}
            />
            <Stack.Screen
                name="MapScreen"
                component={MapScreen}
                options={{
                    title: 'Map'
                }}
            />
        </Stack.Navigator>
    );
};