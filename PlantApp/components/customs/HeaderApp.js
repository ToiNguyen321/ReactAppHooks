import React from 'react'
import { View, StyleSheet, Image, TouchableNativeFeedback} from 'react-native'
import { colors, icons, sizes } from '../../constant';


export default function HeaderApp({navigation}) {
   return (
     <View style={styles.container}>
        <TouchableNativeFeedback
            onPress={()=>navigation.goBack()}
            style={styles.buttonBack}
        >
            <Image source={icons.back} style={styles.iconBack} />
        </TouchableNativeFeedback>
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
      justifyContent: 'flex-start'
   },
   buttonBack: {
      width: 50,
      backgroundColor: colors.white,
      height: '70%',
      justifyContent: 'center'
   }
});
