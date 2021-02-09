import React, {useState, useEffect} from 'react';
import { Text, View, StyleSheet, Dimensions, ActivityIndicator} from 'react-native';
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import MapView from 'react-native-maps';

import SearchBar from '../components/SearchBar';
import RestoBoxList from '../components/RestoBoxList';

const initialState = {latitude: null, longitude: null};
const {width: WIDTH, height: HEIGHT} = Dimensions.get("window");

const images = [
    {imageSrc: require("../assets/images/a.jpg"), id: "1"},
    {imageSrc: require("../assets/images/a.jpg"), id: "2"},
    {imageSrc: require("../assets/images/a.jpg"), id: "3"},
    {imageSrc: require("../assets/images/a.jpg"), id: "4"},
    {imageSrc: require("../assets/images/a.jpg"), id: "5"},
    {imageSrc: require("../assets/images/a.jpg"), id: "6"},
    {imageSrc: require("../assets/images/a.jpg"), id: "7"},
    {imageSrc: require("../assets/images/a.jpg"), id: "8"},
    {imageSrc: require("../assets/images/a.jpg"), id: "9"},
    {imageSrc: require("../assets/images/a.jpg"), id: "10"},
]
const RestoScreen = (props) => {
    const {container, mapStyle} = styles;
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
            <RestoBoxList images= {images} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
         flexDirection: "column",
         alignItems: "center",
         justifyContent: "flex-start",
         // backgroundColor: "#000",
         paddingTop: 20,
        // top: 20,
        //  marginTop: Constants.statusBarHeight  , 
    },
    mapStyle: {
        width: WIDTH,
        height: (HEIGHT * 2.5) / 4,
        // flexGrow: 3
    }
});

export default RestoScreen;