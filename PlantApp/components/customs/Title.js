import React from 'react'
import { StyleSheet, View, Text } from 'react-native';
import { sizes } from '../../constant';

export default function Title(props) {
   return (
      <View style={[styles.container, props.styles && props.styles]}>
         <Text style={styles.title}>
            {props.title}
         </Text>
         <View>

         </View>
      </View>
   )
}
const styles = StyleSheet.create({
   container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
   },
   title: {
      fontSize: sizes.h2,
      fontWeight: 'bold',
      paddingBottom: sizes.padding * 3.5,
   },
});
