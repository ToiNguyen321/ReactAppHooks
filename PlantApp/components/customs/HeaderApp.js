import React from 'react'
import { View, StyleSheet, Image, TouchableNativeFeedback } from 'react-native'
import { colors, icons, sizes } from '../../constant';


export default function HeaderApp(props) {
   return (
      <View style={styles.container}>
         {
            props.back &&
            <TouchableNativeFeedback
               onPress={() => props.navigation.goBack()}
               style={styles.buttonBack}
            >
               <Image source={icons.back} style={styles.iconBack} />
            </TouchableNativeFeedback>
         }
         {
            props.menu &&
            <TouchableNativeFeedback
               onPress={() => props.navigation.openDrawer()}
               style={styles.buttonBack}
            >
               <Image source={icons.ellipsis} style={styles.iconMenu} />
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
      paddingHorizontal: sizes.padding * 2.5,
      justifyContent: 'space-between'
   },
   buttonBack: {
      width: 50,
      backgroundColor: colors.white,
      height: '70%',
      justifyContent: 'center'
   },
   iconMenu: {
      width: 20,
      height: 20,
   }
});
