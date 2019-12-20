import React from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { icons } from '../constants'
export default HeaderApp = (props) => {
   return (
      <View style={styles.container}>
         <View style={styles.left}>
            <TouchableOpacity>
               <Image
                  style={styles.icon}
                  source={icons.iconMenu}
               />
            </TouchableOpacity>
         </View>
         <View style={styles.content}>
            <Text style={styles.textTitle}>APN</Text>
         </View>
         <View style={styles.right}>

         </View>
      </View>
   )
}
const styles = StyleSheet.create({
   container: {
      height: 50,
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 15,
   },
   left: {
      justifyContent: 'center',
      alignItems: 'center',
   },
   icon: {
      width: 25,
      height: 25,
   },
   right: {
      width: 25,
      height: 25,
   },
   content :{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
   },
   textTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      
   }
});
