import React from 'react';
import { TouchableHighlight, View, Text } from 'react-native'

export default function Button(props) {
   const { } = props

   return (
      <TouchableHighlight
         onPress={() => navigate('Login')}
         style={styles.viewTouch}
      >
         <View style={[styles.viewButtonLogin, styles.viewButtonSignUp,]}>
            <Text style={[styles.textLogin, styles.textSignUp,]}>Login</Text>
         </View>
      </TouchableHighlight>
   )
}
const styles = StyleSheet.create({
   viewTouch: {
      marginBottom: sizes.padding * 1.5,
      borderRadius: 45,
   },
   viewButtonLogin: {
      height: 45,
      width: 220,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 45,
   },
   textLogin: {
      fontSize: sizes.base,
      color: colors.white,
      fontWeight: 'bold',
   },
});
