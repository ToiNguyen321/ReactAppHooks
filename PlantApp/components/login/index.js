import React from 'react'
import { View, Text, StyleSheet, TextInput, TouchableHighlight } from 'react-native'
import HeaderApp from '../customs/HeaderApp'
import { sizes, colors } from '../../constant';
import KeyBoardDismiss from '../customs/KeyBoardDismiss';
import LinearGradient from 'react-native-linear-gradient';

export default function Index({ navigation }) {

   return (
      <View style={{ flex: 1 }}>
         <HeaderApp navigation={navigation} />
         <KeyBoardDismiss style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <View style={styles.viewForm}>
               <View style={styles.viewInput}>
                  <Text style={styles.titleInput}>Email</Text>
                  <TextInput
                     style={styles.input}
                     placeholder={"Enter Email"}
                  />
               </View>
               <View style={styles.viewInput}>
                  <Text style={styles.titleInput}>Password</Text>
                  <TextInput
                     style={styles.input}
                     placeholder={"Enter Password"}
                  />
               </View>
            </View>
            <TouchableHighlight
               onPress={() => alert("Login")}
               style={styles.viewTouch}
            >
               <LinearGradient
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  colors={[colors.primary, colors.secondary]}
                  style={styles.viewButtonLogin}
               >
                  <Text style={styles.textLogin}>Login</Text>
               </LinearGradient >
            </TouchableHighlight>
         </KeyBoardDismiss>
      </View>
   )
}
const styles = StyleSheet.create({
   container: {
      flex: 1,
      paddingHorizontal: sizes.padding * 2.5,
   },
   title: {
      fontSize: sizes.h2,
      fontWeight: 'bold',
      paddingBottom: sizes.padding * 3.5,
   },
   viewForm: {
      // borderWidth: 1,
   },
   titleInput: {
      fontSize: sizes.base,
      color: colors.gray2
   },
   viewInput: {
      paddingVertical: sizes.padding,
      borderBottomWidth: 1,
      borderBottomColor: colors.gray,
      marginTop: sizes.padding * 0.5,
   },
   input: {
      fontSize: sizes.base,
      paddingTop: sizes.padding,
      paddingVertical: 0,
   },
   viewTouch: {
      marginVertical: sizes.padding * 1.5,
      borderRadius: 7.5,
   },
   viewButtonLogin: {
      height: 45,
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 7.5,
   },
   textLogin: {
      fontSize: sizes.base,
      color: colors.white,
      fontWeight: 'bold',
   },
});

