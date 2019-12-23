import React from 'react'
import { View, StyleSheet, Image, TouchableNativeFeedback } from 'react-native'
import { colors, icons, sizes } from '../../constant';


export default function HeaderApp(props) {
   const goBack = () => props.navigation.goBack();
   const openDrawer = () => props.navigation.openDrawer()
   return (
      <View style={styles.container}>
         {
            props.back &&
            <TouchableNativeFeedback
               onPress={goBack}
            >
               <View style={styles.buttonBack} >
                  <Image source={icons.back} style={styles.iconBack} />
               </View>
            </TouchableNativeFeedback>
         }
         {
            props.menu &&
            <TouchableNativeFeedback
               onPress={openDrawer}
            >
               <View style={styles.buttonBack} >
                  <Image source={icons.ellipsis} style={styles.iconMenu} />
               </View>
            </TouchableNativeFeedback>
         }
      </View>
   )
}
const styles = StyleSheet.create({
   container: {
      flexDirection: 'row',
      height: 60,
      alignItems: 'center',
      backgroundColor: colors.white,
      paddingHorizontal: sizes.padding * 1.5,
      justifyContent: 'space-between'
   },
   buttonBack: {
      width: null,
      backgroundColor: colors.white,
      paddingHorizontal: sizes.padding,
      height: '70%',
      justifyContent: 'center',
      alignItems:  'flex-start'
   },
   iconMenu: {
      width: 20,
      height: 20,
   }
});
