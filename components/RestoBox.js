import React from 'react';
import {  View, Image, StyleSheet, Text } from 'react-native';


const RestoBox = ({dummy_data, small}) =>{
    const {container, imageStyle, imageFixStyle, smallStyle, customText_1, customText_2, customText_3} = styles; 
    
    const {picture, name, main_info, distance, deliveredIn} = dummy_data;
    
    const getContainerStyle = () => small ? smallStyle : container;
    const getImageStyle = () => small ? imageFixStyle : imageStyle;
   
    return (
        <View style={getContainerStyle()} >
                <Image style={getImageStyle()} source={picture} />
                <View>
                    <Text style={customText_1} >{name}</Text>
                    <Text style={customText_2} >{main_info}</Text>
                    <Text style={customText_3} >{distance}km, Livraison en {deliveredIn} Minutes</Text>
                </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        width:162,
        height: 243,
    },
    imageStyle: {
        width: "100%",
        height: "100%",
        borderRadius: 10
    },
    imageFixStyle: {
        width: 80,
        height: 80,
        marginRight: 20
    },
    smallStyle: {
        flexDirection: 'row',
        width: 280,
        height: 80,
        marginTop: 15,
        marginHorizontal: 5,
    },
    customText_1: {
        fontSize: 22, 
        fontWeight: '700', 
        fontFamily:'Poppins'
    },
    customText_2: {
        fontSize: 18, 
        fontFamily:'Poppins'
    },
    customText_3: {
        fontSize: 14, 
        fontFamily:'Poppins',
        fontWeight: 'bold', 
        color: '#d6d6d6'
    }

});
export default RestoBox;
