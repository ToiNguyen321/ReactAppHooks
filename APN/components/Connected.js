import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, Image, Animated, TouchableOpacity } from 'react-native'
import HeaderApp from './HeaderApp'
import { icons } from '../constants'
import SelectedServer from './SelectedServer'
import { CounterContext } from '../redux/Context'

export default Connected = () => {
   const { state, dispatch } = React.useContext(CounterContext);
   const { myServerSelected, isShowDropDown } = state;
   const height = new Animated.Value(0);
   const [isConnect, setIsConnect] = useState(false);
   const setConnect = () => {
      setTimeout(() => setIsConnect(!isConnect), 0)
   }

   const showSelectedServer = () => {
      dispatch({type: 'SHOW'})
      
   }
   useEffect(() => {
      let toValue = isShowDropDown.isShow ? 400 : 0
      Animated.spring(
         height,
         {
            toValue,
            duration: 200,
         }
      ).start()
    }, [isShowDropDown]);
   return (
      <View style={styles.fill}>
         <HeaderApp />
         <View style={styles.container}>
            <View style={styles.viewStatus}>
               <Text style={styles.textStatus}>{isConnect ? 'Connect' : 'Disconnect'}</Text>
               <Image
                  source={isConnect ? icons.checked : icons.unchecked}
                  style={[styles.iconStatus, { tintColor: isConnect ? null : '#9e9e9e' }]}
               />
            </View>
            <Image source={isConnect ? icons.online : icons.offline} style={styles.icon} />
            <TouchableOpacity
               style={[
                  styles.buttonConnect,
                  {
                     backgroundColor: isConnect ? '#FFF' : '#2196f3',
                     elevation: isConnect ? 1.5 : 0,
                  }
               ]}
               onPress={setConnect}
            >
               <Text
                  style={[
                     styles.textButtonConnect,
                     {
                        color: isConnect ? null : '#FFF'
                     }
                  ]}
               >
                  {isConnect ? 'DISCONNECT' : 'CONNECT NOW'}
               </Text>
            </TouchableOpacity>
         </View>
         <View style={styles.dropdown}>
            <TouchableOpacity
               style={{ flexDirection: 'row', alignItems: 'center' }}
               onPress={showSelectedServer}
            >
               <Image style={styles.iconServerConnect} source={myServerSelected.icon} />
               <Text style={styles.textServerConnect}>{myServerSelected.name}</Text>
               <Image style={styles.iconDropdown} source={icons.dropdown} />
            </TouchableOpacity>
         </View>
         <Animated.View style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height}}>
            <SelectedServer />
         </Animated.View>
      </View>
   )
}
const styles = StyleSheet.create({
   fill: {
      flex: 1
   },
   container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
   },
   viewStatus: {
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      width: 200,
      height: 40,
      borderRadius: 20,
      marginBottom: 20,
      elevation: 1.5,
      backgroundColor: '#FFF'
   },
   textStatus: {
      fontSize: 16,
      color: '#393939',
   },
   iconStatus: {
      width: 15,
      height: 15,
      marginLeft: 7.5,
   },
   buttonConnect: {
      marginTop: 20,
      width: 200,
      justifyContent: 'center',
      alignItems: 'center',
      height: 40,
      borderRadius: 45,
   },
   textButtonConnect: {
      fontSize: 18,
      fontWeight: '900'
   },
   icon: {
      width: 200,
      height: 200
   },
   dropdown: {
      height: 50,
      marginHorizontal: 10,
      borderTopWidth: 0.7,
      borderTopColor: '#222222',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row'
   },
   buttonSelectServer: {

   },
   iconServerConnect: {
      width: 20,
      height: 20,
   },
   textServerConnect: {
      fontSize: 16,
      paddingHorizontal: 10,
      textTransform: 'capitalize'
   },
   iconDropdown: {
      width: 17,
      height: 12,
      resizeMode: 'stretch'
   }
});