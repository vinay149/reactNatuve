import React from 'react';
import {View,StyleSheet, TouchableOpacity} from 'react-native';
const Card = (props) => {
    
    return (
        
        <View style={styles.card}>
            <View style = {styles.cardContent}>
                {props.children}
            </View>
        </View>
       
    )
}

export default Card;

const styles = StyleSheet.create({
    card:{
      borderRadius:6,
      elevation:3,
      backgroundColor:'#fff',
      shadowOffset:{width:1,height:1},
      shadowColor:'#333',
      shadowOpacity:0.3,
      shadowRadius:2,
      padding:16,
      width:70,
      height:70
    },
    cardContent:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }
});