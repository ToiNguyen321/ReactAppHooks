import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity, ScrollView, Image } from 'react-native'
import HeaderApp from '../customs/HeaderApp'
import Title from '../customs/Title'
import { sizes, width, colors } from '../../constant'
import { explore } from '../../constant/mocks'
import LinearGradient from 'react-native-linear-gradient'


export default function Index(props) {

   const renderImage = (item, index) => {
      let size = Image.resolveAssetSource(item);  
      let fullWidth = width - (sizes.padding * 2.5 * 2);
      let resize = (size.width * 100) / fullWidth;
      let imgWidth = resize > 75 ? fullWidth : size.minWidth;
      let style = index === 0 ? { minWidth: imgWidth, maxWidth: imgWidth, minHeight: imgWidth, maxHeight: imgWidth } : { minWidth: imgWidth, maxWidth: imgWidth };
      const navigateScreen = () => props.navigation.navigate('Product')
      return (
         <TouchableOpacity 
            key={index}
            onPress={navigateScreen}
            activeOpacity={0.9}
         >
            <Image 
               source={item}
               style={[styles.image, style]} 
            />
         </TouchableOpacity>
      )
   }
   const renderFooter = () => {
      return (
         <View style={styles.viewFooter}>
            <TouchableOpacity
               activeOpacity={0.8}
            >
               <LinearGradient
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  colors={[colors.primary, colors.secondary]}
                  style={styles.buttonFooter}
               >
                  <Text style={styles.textButtonFooter}>Filters</Text>
               </LinearGradient >
            </TouchableOpacity>
         </View>
      )
   }
   return (
      <View style={styles.container}>
         <HeaderApp back navigation={props.navigation} />
         <Title title="Explore" styles={{ paddingHorizontal: sizes.padding * 2.5 }} />
         <ScrollView showsVerticalScrollIndicator={false} style={styles.explore}>
            
            <View style={styles.viewImages}>
               {explore.map(renderImage)}
            </View>
         </ScrollView>
         {renderFooter()}
      </View>
   )
}
const styles = StyleSheet.create({
   container: {
      flex: 1,
   },
   explore: {
      paddingHorizontal: sizes.padding * 2.5,
      
   },
   viewImages: {
      flexWrap: "wrap",
      flexDirection: 'row',
      justifyContent: 'space-between'
   },
   imageFull: {
      width: width - sizes.padding * 2.5 * 2,
      marginBottom: sizes.base,
      borderRadius: 4,
   },
   image: {
      minHeight: 100,
      maxHeight: 130,
      maxWidth: width - (sizes.padding * 2.5),
      marginBottom: sizes.base,
      borderRadius: 4
   },
   viewFooter: {
      position: 'absolute',
      bottom: sizes.padding * 2.5,
      left: 0,
      right: 0,
      justifyContent: 'center',
      alignItems: 'center'
   },
   buttonFooter: {
      height: 45,
      borderRadius: 5,
      width: 150,
      justifyContent: 'center',
      alignItems: 'center',
      elevation: 3,
   },
   textButtonFooter: {
      fontSize: sizes.base,
      color: colors.white
   }
});