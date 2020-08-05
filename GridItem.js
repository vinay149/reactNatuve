import React, { useState } from 'react';
import { Platform, FlatList, Text, Alert, View, StyleSheet, TouchableOpacity } from 'react-native';
import Card from './Card';

const GridItem = (props) => {

    console.log(props.itemValue)
    const itemClickHandler = (item) => {
        console.log(item.itemValue.key)
    }

    return (
        <TouchableOpacity activeOpacity={1} onPress={itemClickHandler.bind(this, props)}>
            <Card>
                <View style={styles.container}>
                    <Text>{props.itemValue.key}</Text>
                </View>
            </Card>
        </TouchableOpacity>
    )
}


export default GridItem;

const styles = StyleSheet.create({
    container: {
           marginTop:8
    }
});
