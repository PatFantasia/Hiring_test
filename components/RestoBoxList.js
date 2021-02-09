import React from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

import RestoBox from './RestoBox';
import {CheckDistance} from '../utils/mock_api';


const RestoBoxList = ({dummy_data}) => {
    // filter the list of dummy data and paste it to flat list component 
    const checkedDummy_list = CheckDistance(dummy_data)
   
    const renderRestoBox = ({item}) => {
        return(
            <TouchableOpacity>
                <RestoBox small dummy_data={item} />
            </TouchableOpacity>
        )
    }
    return (
        <FlatList
            style={styles.flex}
            contentContainerStyle={styles.padding}
            data={checkedDummy_list}
            // horizontal={true}
            renderItem= {item => renderRestoBox(item)}
            keyExtractor={item => item.id}
        />
);}

const styles = StyleSheet.create({
    flex: {
        flex: 1,
    },
    padding: {
        paddingHorizontal: 25
    }
});

export default RestoBoxList;
 