import React from 'react'
import HeaderApp from '../customs/HeaderApp'
import { View, Text, StyleSheet, Image, SafeAreaView } from 'react-native'
import { images, width, height, sizes, colors } from '../../constant';
import { ScrollView } from 'react-native-gesture-handler';

const listImages = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const renderItem = (item) => {
   return (
      <Image key={`${item}`} source={images.plants_2} style={styles.imageGallery} />
   )
}
export default function index({ navigation }) {
   return (
      <View style={styles.container}>
         <HeaderApp back={true} menu={true} navigation={navigation} />
         <ScrollView style={styles.container}>
            <View style={styles.viewImage}>
               <Image source={images.plants_1} style={styles.imageBig} />
            </View>
            <SafeAreaView style={styles.content}>
               <Text style={styles.titleProduct}>16 Best Plants That Thrive In Your Bedroom</Text>
               <SafeAreaView style={styles.viewInfo}>
                  <Text style={styles.textInfo}>Interior</Text>
                  <Text style={styles.textInfo}>27m</Text>
                  <Text style={styles.textInfo}>Ideas</Text>
               </SafeAreaView>
               <Text style={styles.description}>
                  Sint deserunt non excepteur ullamco cupidatat ut sunt magna consectetur sunt.Sint deserunt non excepteur ullamco cupidatat ut sunt magna consectetur sunt.
               </Text>
               <Text style={styles.titleProduct}>Gallery</Text>
               <View style={styles.gallery}>
                  {
                     listImages.slice(0, 2).map(renderItem)
                  }
                  <View style={styles.imageGalleryPlus}>
                     <Text style={styles.textGalleryPlus}>+{listImages.slice(2).length}</Text>
                  </View>
               </View>
            </SafeAreaView>
         </ScrollView>
      </View>
   )
}
const styles = StyleSheet.create({
   container: {
      flex: 1,
   },
   viewImage: {
      width,
      height: 300,
   },
   imageBig: {
      width: null,
      height: null,
      flex: 1,
      resizeMode: 'contain'
   },
   content: {
      flex: 1,
      paddingHorizontal: sizes.padding * 2.5,
   },
   titleProduct: {
      fontSize: sizes.h2,
      fontWeight: 'bold',
      color: colors.black,
      paddingVertical: sizes.padding * 2.5,
      lineHeight: 25,
   },
   viewInfo: {
      flexDirection: 'row',
      paddingBottom: sizes.padding * 2.5
   },
   textInfo: {
      paddingVertical: sizes.padding * 0.25,
      paddingHorizontal: sizes.padding,
      borderRadius: 15,
      borderWidth: 0.75,
      borderColor: colors.gray,
      fontSize: sizes.font,
      marginRight: sizes.padding,
      color: colors.gray,
      // elevation: 0.5,
   },
   description: {
      color: colors.gray,
      fontSize: sizes.font,
      lineHeight: 22,
      paddingBottom: sizes.padding * 2.5,
      borderBottomWidth: 0.75,
      borderBottomColor: colors.gray,
   },
   gallery: {
      paddingBottom: sizes.padding * 2.5,
      flexDirection: 'row'
   },
   imageGallery: {
      marginRight: sizes.padding * 1.5,
      width: (width - sizes.padding * 5 - sizes.padding * 3) * 0.4,
      height: (width - sizes.padding * 5 - sizes.padding * 3) * 0.4,
   },
   imageGalleryPlus: {
      width: (width - sizes.padding * 5 - sizes.padding * 3) * 0.2,
      height: (width - sizes.padding * 5 - sizes.padding * 3) * 0.2,
      justifyContent: 'center',
      alignContent: 'center',
      backgroundColor: "rgba(197,204,214,0.20)",
      borderRadius: 3,
   },
   textGalleryPlus: {
      fontSize: sizes.base,
      color: colors.gray,
      textAlign: 'center'
   }
});