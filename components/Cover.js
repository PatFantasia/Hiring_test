import React from 'react';
import { View, StyleSheet, Image, Dimensions } from 'react-native';

const { width: WIDTH } = Dimensions.get("window");


const Cover = ({imgCover, OtherSyle, customStyle}) => {
    const {container, imgStyle, container_2 } = styles;
   
    const getContainerStyle = () =>(
        OtherSyle ? container_2 : container
    ) 

    return  (
        <View style={getContainerStyle()} >
            <Image source={imgCover} style= {[imgStyle, customStyle]} />
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    width: WIDTH - 60 ,
    height: 225
  },
  container_2: {
    width: WIDTH - 60 ,
    height: 230,
  },
   imgStyle: {
       width: "100%",
       height: "100%"
   }  
});

export default Cover;

 