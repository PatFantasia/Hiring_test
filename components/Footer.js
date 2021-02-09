import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import {prefix} from '../utils/helpers';


const Footer = ({customStyle, onPress, routes}) => {
    const {container, arrowStyle, offStyle } = styles; 

    return  (
            <View style={container} >
                <TouchableOpacity>
                    <Ionicons 
                        name={`${prefix}-arrow-back-circle-sharp`} 
                        style={[arrowStyle, customStyle]} 
                        onPress ={routes}
                    />
                </TouchableOpacity>
               
                <Text style={offStyle} />   
               
                <TouchableOpacity>
                    <Ionicons 
                        name={`${prefix}-arrow-forward-circle-sharp`} 
                        style={arrowStyle} 
                        onPress= {onPress}
                    />
                </TouchableOpacity>
            </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-end',
        width: '100%',
        marginTop: 20 ,
        marginLeft: 30
    },
    arrowStyle: {
        fontSize: 50,
        color: "#2080f1"
    },
    offStyle: {
        color: 'transparent'
    }
});

export default Footer;