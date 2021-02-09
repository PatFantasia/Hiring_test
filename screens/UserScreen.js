import React, {useState, useEffect} from 'react';
import { Text, View, StyleSheet, Dimensions, ActivityIndicator} from 'react-native';
import * as Location from 'expo-location';
import MapView from 'react-native-maps';

import SearchBar from '../components/SearchBar';
import RestoBoxList from '../components/RestoBoxList';
import {dummy_data} from '../dummy_restaurant';

const initialState = {latitude: null, longitude: null};
const {width: WIDTH, height: HEIGHT} = Dimensions.get("window");


const UserScreen = (props) => {
    const {container, mapStyle, boxContainerStyle} = styles;
    const [state, setState] = useState(initialState);
    const {longitude, latitude} = state;
    
    const getUserLocation = async() => {
        try {
            const {coords: {latitude, longitude} } = await Location.getCurrentPositionAsync();
            setState(prevState => ({
                ...prevState,
                latitude,
                longitude
            }))
        } catch (e) {
            console.error("error getUserLocation : ", e);
        }
    }; 

    useEffect(()=>{
        getUserLocation();
    },[]);

    if(!latitude || !longitude ) {
        return (
            <View style={container}>
                <ActivityIndicator size='large' />
            </View>
        )
    }

    return  (
        <View style={container} >
            <MapView 
                style={mapStyle} 
                showsUserLocation
                followsUserLocation
                region={{
                    latitude,
                    longitude,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.121
                }}
            />
            <SearchBar  />
            <View style={boxContainerStyle}>
                <RestoBoxList  dummy_data= {dummy_data} />

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
         flexDirection: "column",
         alignItems: "center",
         justifyContent: "flex-start",
         paddingTop: 20,
    },
    mapStyle: {
        width: WIDTH,
        height: (HEIGHT * 2.5) / 4,
    },
    boxContainerStyle: {
        alignSelf: 'flex-start',
    }
});

export default UserScreen;