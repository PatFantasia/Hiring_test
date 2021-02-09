import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Constants from "expo-constants";

import Cover from '../components/Cover';
import Title from '../components/Title';
import Header from '../components/Header';
import Footer from '../components/Footer';

const img = require("../assets/images/welcomeImg.png");


const WelcomeScreen = (props) => {
    const {container, turnOff } = styles;

    const handleHeader = (routes) => {
        props.navigation.push(routes); 
    } 

    // Choice of another function to route footer in order to avoid conflict with header's function
    // (error) : *****tried to register two views with the same name******
   
       const handleFooter = (routes) => {
        props.navigation.push(routes); 
    } 

    return  ( 
        <View style={container} >
            <Header customStyle={turnOff} onPress ={()=> handleHeader('Onboarding')} />
            <Cover imgCover={img} />
            <Title content="Find The Food" size="big" />
            <Title content="You Want" size="big" />
            <Title 
                content="Our app helps you find the right food for every " 
                size="small" 
            />
            <Title 
                content="mood, any time &amp; any day. " 
                size="small" 
            />
            <Footer customStyle={turnOff} onPress ={()=> handleFooter('Onboarding')} />
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
   turnOff: {
        color: 'transparent'
   } 
});

export default WelcomeScreen;


// **********  Snippet rcnf  **************
// import React from 'react';
// import { Text, View, StyleSheet } from 'react-native';

// const WelcomeScreen = () => {

//     return  (
//         <View>
//             <Text>WelcomeScreen</Text>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
    
// });

// export default WelcomeScreen;
