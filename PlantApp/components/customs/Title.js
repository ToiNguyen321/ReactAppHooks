import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { sizes, images, colors } from '../../constant';

export default function Title(props) {
   return (
      <View style={[styles.container, props.styles && props.styles]}>
         <Text style={styles.title}>
            {props.title}
         </Text>
         {
            props.setting && 
            <TouchableOpacity
               activeOpacity={1}
               // onPress={() => props.navigation.openDrawer()}
            >
               <View style={styles.buttonAvatar}>
                  <Image source={images.avatar} style={styles.avatar} />
               </View>
            </TouchableOpacity>
         }
      </View>
   )
}
const styles = StyleSheet.create({
   container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingBottom: sizes.padding * 2.5,
   },
   title: {
      fontSize: sizes.h2,
      fontWeight: 'bold',
      color: colors.black
   },
   buttonAvatar: {
      justifyContent: 'center',
      alignItems: 'center',
   },
   avatar: {
      width: 30,
      height: 30,
   }
});
