import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Constants from "expo-constants";

import Cover from '../components/Cover';
import Title from '../components/Title';
import Header from '../components/Header';
import Footer from '../components/Footer';

const img = require("../assets/images/onboardingImg.png");


const OnboardingScreen = (props) => {
    const handleHeader = (routes) => {
        props.navigation.push(routes);
    } 

    const handleFooter = (routes) => {
        props.navigation.push(routes); 
    }

    const getRouteBack =() => {
         props.navigation.push('Welcome') 
    }

    return  (
        <View style={styles.container} > 
            <Header routes={getRouteBack} onPress ={()=> handleHeader('User')} />
            <Cover OtherSyle customStyle={styles.imgStyle} imgCover={img} />
            <Title content="We’ll have it" size="custom_big" />
            <Title content="delivered" size="custom_big" />
            <Title 
                content="Our hassle free delivery service is world class and " 
                size="custom_small" 
            />
            <Title 
                content="will have your order delivered to any address of " 
                size="custom_small" 
            />
            <Title 
                content="your specification." 
                size="custom_small" 
            />
            <Footer routes={getRouteBack} onPress ={()=> handleFooter('User')} />
    </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
         flexDirection: "column",
         alignItems: "center",
         paddingBottom: 20,
         marginTop: Constants.statusBarHeight,
    },
    imgStyle: {
        width: "60%",
        height: "100%",
        padding: 50,
        marginLeft: 50
    }  
});

export default OnboardingScreen;
