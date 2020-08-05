import React from 'react';
import { Platform, FlatList, View, StyleSheet, ScrollView, Dimensions, SafeAreaView } from 'react-native';
/**
 * column: Indicating number of column in the grid.
 * data: Data tha wil reflecting to the grid (as LIst).
 * header:Custom Header of the grid if you will not pass the head as prop then no header will be show.
 * footer: custom Footer of the grid if you will not pass the head as prop then no header will be show.
 * @param {*} props 
 */
const RnGrid = (props) => {
    let column = props.numberOfColumn || 2;
    let data = props.data || [];
    let header = props.header || null;
    let footer = props.footer || null;
    let showScrollIndecator = props.showScrollBar || false;
    return (
        <ScrollView showsVerticalScrollIndicator={showScrollIndecator}>
            <SafeAreaView>
        <View style={[styles.container,props.style]} >
            <FlatList
                key = {column}
                data={data}
                /**
                 *  This is the style of container in whihc grid's row are present. can pass the style from external file 
                 * which will be merged with already present style.
                 *  
                 */
                contentContainerStyle={[styles.listStyle,props.listStyle]}
                columnWrapperStyle={[styles.row,props.rowStyle]}
                numColumns={column}
                /**
                 *  Custom header and footer that will be passed as props from external file.
                 */
                ListHeaderComponent={header}
                ListFooterComponent={footer}
                /**
                 * You can pass the header and footer style from external
                 * file which will be merged with already define style for header and footer.
                 *
                 */
                ListHeaderComponentStyle = {[styles.headerComponent,props.headerStyle]}
                ListFooterComponentStyle = {[styles.footerComponent,props.footerStyle]}
                /**
                 * This will be use for seperator between two rows , you can pass the seperator as props 
                 * from external file where you are using the grid.
                 * 
                 */
                ItemSeparatorComponent={props.itemSeparator}
                renderItem={props.gridItem}>
            </FlatList>
        </View>
        </SafeAreaView>
        </ScrollView>
        
    );
}

export default RnGrid;

const styles = StyleSheet.create({
    container: {
        margin: (Dimensions.get('window').width)/30,
        paddingTop: (Platform.OS) === 'ios' ? 24 : 16
    },
    row:{
        flex:1,
        padding:8,
        width:'100%',           
        flexDirection:'row',
        flexWrap:"wrap",
        justifyContent:"space-evenly"
    },
    headerComponent:{
        flex:1,
        marginTop:8,
        marginBottom:8,
        flexDirection:'row',
        justifyContent:"center"
    },
    listStyle:{
         flex:1,
         flexDirection:'column',
         justifyContent:'center'
    },
    footerComponent:{
        flex:1,
        marginTop:8,
        marginBottom:8,
        flexDirection:'row',
        justifyContent:"center"
    }        

});
