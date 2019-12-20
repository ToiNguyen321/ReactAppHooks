import React from 'react'
import { Text, View, StyleSheet, Image, Dimensions } from 'react-native'
export default HomeItem = ({ item }) => {
   return (
      <View style={styles.fill}>
         <View style={styles.viewImage}>
            <Image
               source={item.image}
               style={styles.imageWelcome}
            />
         </View>
         <View style={styles.viewBottom}>
            <Text style={styles.textTitle}>Secured, forever.</Text>
            <Text style={styles.textDescription}>
               There are many variations of passages of Lorem Ipsum available,
                  but the majority have suffered alteration.</Text>
         </View>
      </View>
   )
}
const styles = StyleSheet.create({
   fill: {
      flex: 1,
      width: Dimensions.get('window').width
   },
   viewImage: {
      flex: 1,
      paddingTop: 30,
      alignItems: 'center',
   },
   imageWelcome: {
      width: '70%',
      height: '90%',
      resizeMode: 'center'
   },
   viewBottom: {
      alignItems: 'center',
      paddingTop: 20,
   },
   textTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 15,
   },
   textDescription: {
      fontSize: 16,
      paddingHorizontal: 30,
      fontWeight: "500",
      marginBottom: 25,
   }
});
