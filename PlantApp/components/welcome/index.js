import React from 'react';
import { View, StyleSheet, Text, Image, Dimensions, Animated, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { colors, sizes, images } from '../../constant';
import TermsOfService from './TermsOfService';

const data = [
   { id: 1, image: images.illustration_1 },
   { id: 2, image: images.illustration_2 },
   { id: 3, image: images.illustration_3 },
]
const { width, height } = Dimensions.get('window')
export default function Index({ navigation }) {
   const [modalVisible, setModalVisible] = React.useState(false)

   const scrollX = new Animated.Value(0);
   const navigateLogin = () => navigation.navigate('Login');
   
   const keyExtractor = (item) => `${item.id}`;
   const renderItem = ({ item }) => <View style={styles.viewImage}>
      <Image source={item.image} style={styles.image} />
   </View>

   const setModal = () => setModalVisible(!modalVisible)
   return (
      <View style={styles.container}>
         <View style={styles.viewTitle}>
            <Text style={styles.titleTop}>
               Your home. <Text style={styles.titleTopColor}>Greener</Text>
            </Text>
            <Text style={styles.titleBot}>Enjoy the experience</Text>
         </View>
         <View style={styles.viewContent}>
            <Animated.FlatList
               horizontal
               showsHorizontalScrollIndicator={false}
               pagingEnabled
               data={data}
               keyExtractor={keyExtractor}
               renderItem={renderItem}
               onScroll={
                  Animated.event([{
                     nativeEvent: { contentOffset: { x: scrollX } }
                  }])
               }
            />
            <View style={styles.viewDot}>
               {
                  data.map((item, index) => {
                     const stepPosition = Animated.divide(scrollX, width);
                     const opacity = stepPosition.interpolate({
                        inputRange: [index - 1, index, index + 1],
                        outputRange: [0.4, 1, 0.4],
                        extrapolate: 'clamp',
                     });
                     return (
                        <Animated.View key={`dot-${item.id}`} style={[styles.dot, { opacity }]} />
                     )
                  })
               }
            </View>
         </View>
         <View>
            <TouchableOpacity
               onPress={navigateLogin}
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
            </TouchableOpacity>
            <TouchableOpacity
               onPress={navigateLogin}
               style={styles.viewTouch}
            >
               <View style={[styles.viewButtonLogin, styles.viewButtonSignUp,]}>
                  <Text style={[styles.textLogin, styles.textSignUp,]}>SignIn</Text>
               </View>
            </TouchableOpacity>
            <TouchableOpacity
               onPress={setModal}
            >
               <Text style={[styles.textTerms]}>Terms of service</Text>
            </TouchableOpacity>
            <TermsOfService modalVisible={modalVisible} setModalVisible={setModal} />
         </View>
      </View>
   )
}
const styles = StyleSheet.create({
   container: {
      flex: 1,
      alignItems: 'center',
   },
   viewTitle: {
      paddingTop: sizes.padding * 2.5,
      paddingBottom: sizes.padding
   },
   titleTop: {
      fontSize: sizes.h1,
      fontWeight: 'bold',
      fontStyle: 'normal',
      color: colors.black
   },
   titleTopColor: {
      color: colors.secondary
   },
   titleBot: {
      fontSize: sizes.base,
      color: colors.gray2,
      textAlign: 'center'
   },
   viewContent: {
      flex: 1,
      position: 'relative',
      alignItems: 'center'
   },
   viewImage: {
      width: width,
      flex: 1,
   },
   image: {
      flex: 1,
      width: null,
      height: null,
      resizeMode: 'contain'
   },
   viewDot: {
      position: 'absolute',
      bottom: 30,
      zIndex: 2,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
   },
   dot: {
      width: 10,
      height: 10,
      borderRadius: 10,
      marginHorizontal: 5,
      backgroundColor: colors.black
   },
   viewTouch: {
      marginBottom: sizes.padding * 1.5,
      borderRadius: 7.5,
   },
   viewButtonLogin: {
      height: 45,
      width: 220,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 7.5,
      elevation: 3,
   },
   textLogin: {
      fontSize: sizes.base,
      color: colors.white,
      fontWeight: 'bold',
   },
   viewButtonSignUp: {
      elevation: 3,
      borderColor: colors.gray,
      backgroundColor: colors.white
   },
   textSignUp: {
      color: colors.gray
   },
   textTerms: {
      fontSize: sizes.base,
      paddingBottom: sizes.padding * 2.5,
      color: colors.gray2,
      textAlign: 'center'
   }

});

