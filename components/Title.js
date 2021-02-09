import React from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';

const { width: WIDTH } = Dimensions.get("window");


const Title = ({content, size}) => {
    const {container, big, small, custom_big, custom_small} = styles;

    const getTitleStyle= () => {
        switch (size) {
            case "big":
                return big;
            case "small":
                return small;
            case "custom_big":
                return custom_big;
            case "custom_small":
                return custom_small
        }
    }

    return  (
        <View style={container} >
            <Text style={getTitleStyle()} >{content}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
    },
    big: {
        fontSize: 45,
        fontWeight: "bold",
        color: "#2080f1",
        paddingHorizontal: 25,
        fontFamily: "Poppins"
    },
    small: {
        fontSize: 15,
        fontWeight: "bold",
        fontFamily: "Poppins",
        color: "#000",
        marginHorizontal: 10,
        justifyContent:"center"
    },
    custom_big: {
        fontSize: 35,
        fontWeight: "bold",
        color: "#2080f1",
        paddingHorizontal: 25,
        fontFamily: "Poppins"
    }, 
    custom_small: {
        fontSize: 13,
        fontWeight: "bold",
        fontFamily: "Poppins",
        color: "#000",
        marginTop: 2,
        justifyContent:"center"
    }
});

export default Title;