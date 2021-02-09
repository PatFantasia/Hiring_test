import React, {useState} from 'react';
import { View, StyleSheet, TextInput, Dimensions, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {prefix} from '../utils/helpers';

const {width: WIDTH} = Dimensions.get("window");

const initialState = {
    food: " Chicken Barbecue",
    predictions: []
}
const SearchBar = () => {
    const {container, inputContainer, inputStyle, iconStyle} = styles;
    const [state, setState] = useState(initialState);
    const { food } = state;

    const handleChangeText = (value) => {
        setState(prevState => ({
            ...prevState,
            food: value
        }))
    }
    return  (
        <View style= {container} >
            <View style={inputContainer} >
                <TouchableOpacity>
                    <Ionicons 
                        name={`${prefix}-menu`} 
                        style={iconStyle} 
                    />
                </TouchableOpacity>
               
                <TextInput 
                    style= {inputStyle} 
                    value= {food}
                    onChangeText={handleChangeText} 
                />
              
                <TouchableOpacity>
                    <Ionicons 
                        name={`${prefix}-options`} 
                        style={iconStyle} 
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        top: 20,
        borderRadius: 8,
        width : WIDTH - 50,
        backgroundColor: '#fff',
        shadowColor:"#000",
        shadowOffset: {width: 0, height: 3},
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 10,
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10
    },
    iconStyle: {
        fontSize: 25,
        color: "#000"
    },
    input: {
        fontSize: 16,
        color: '#303030',
        maxWidth: '70%',
        minWidth: '30%',
        fontFamily: 'Poppins'
    }
});

export default SearchBar;
