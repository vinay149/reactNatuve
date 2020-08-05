import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Grid from './RnGrid';
import GridItem from './GridItem';
import Card from './Card';

export default function App() {
  const [itemData,setItemData] = useState([
    {key: 'One'},
    {key: 'Two'},
    {key: 'Three'},
    {key: 'Four'},
    {key: 'Five'},
    {key: 'Six'},
    {key: 'Seven'},
    {key: 'Eight'},
    {key: 'Nine'},
    {key: 'Ten'},
    {key: 'Eleven'},
    {key: 'Twelve'},
    {key: 'Thirteen'},
    {key: 'Fourteen'},
    {key: 'Fifteen'},
    {key: 'Sixteen'},
    {key: 'Seventeen'},
    {key: 'Eighteen'},
    {key: 'Nineteen'},
    {key: 'Twenty'}
  ]);

  const renderItem = ({item})=> {
    return   <GridItem title = {item.key} itemValue = {item} ></GridItem>
  }

  const getHeader = () =>{
      return <Text>Header</Text>;
  }

  const getFooter = () =>{
    return <Text>Footer</Text>;
  }

  return (
     
      <Grid  footer = {getFooter} rowStyle={styles.row} header = {getHeader} headerStyle={styles.header} data = {itemData} gridItem = {renderItem} ></Grid>
      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header:{
    flex:1,
    justifyContent:'center'
  },
  row:{
    
  }
});
