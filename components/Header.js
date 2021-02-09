import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';


const Header = ({customStyle, onPress, routes}) => {
    const {container, offStyle  } = styles; 
 
    return  (
            <View style={container} >
                <TouchableOpacity onPress ={routes} >
                    <Text style={customStyle} > Back </Text>
                </TouchableOpacity>
                
                <Text style={offStyle} />  
                
                <TouchableOpacity onPress= {onPress} >
                    <Text > Skip </Text>
                </TouchableOpacity>
            </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        width: '100%',
        marginVertical: 30,
        marginLeft: 30
    },
    offStyle: {
        color: 'transparent'
    }
});

export default Header;