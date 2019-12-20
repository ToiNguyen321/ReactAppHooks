import React from 'react'
import { Text, View, StyleSheet, FlatList, Image } from 'react-native'
import { CounterContext } from '../redux/Context';
import dataServer from './dataServer';
import { icons } from '../constants';
import { TouchableOpacity } from 'react-native-gesture-handler';


const ItemSelect = ({ item }) => {
   const { state, dispatch } = React.useContext(CounterContext);
   const { myServerSelected, isShowDropdown } = state;
   const icon = myServerSelected.id === item.id ? icons.checked : icons.unchecked
   return (
      <TouchableOpacity
         onPress={() => {
            dispatch({type: 'HIDE'})
            dispatch({type: 'CHANGE_SERVER', server: item})
         }}
      >
         <View style={styles.viewItem}>
            <Image style={styles.icon} source={item.icon} />
            <Text style={styles.textName}>{item.name}</Text>
            <Image source={icon} />
         </View>
      </TouchableOpacity>
   )
}
export default SelectedServer = () => {
   return (
      <View
         style={styles.container}
      >
         <Text style={styles.title}>Pick Your Server</Text>
         <FlatList
            data={dataServer}
            renderItem={({ item }) => <ItemSelect item={item} />}
            keyExtractor={(item) => `${item.name}`}
            ListFooterComponent={() => <View style={{ paddingBottom: 15, }} />}
         />
      </View>
   )
}
const styles = StyleSheet.create({
   fill: {
      flex: 1
   },
   container: {
      flex: 1,
      marginHorizontal: 7,
      elevation: 4,
      backgroundColor: '#FFF',
      borderTopRightRadius: 30,
      borderTopLeftRadius: 30,
   },
   title: {
      fontSize: 18,
      paddingVertical: 12,
      textAlignVertical: 'center',
      textAlign: 'center',
      borderBottomWidth: 0.2,
   },
   //item
   viewItem: {
      paddingTop: 15,
      paddingHorizontal: 15,
      flexDirection: "row",
      justifyContent: 'space-between',
      alignItems: 'center'
   },
   icon: {
      width: 30,
      height: 30,
   },
   textName: {
      flex: 1,
      textAlign: 'left',
      paddingLeft: 20,
      fontSize: 16,
      textTransform: 'capitalize',
      color: '#222222'
   }
});