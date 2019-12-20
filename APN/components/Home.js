import React from 'react'
import { Text, View, StyleSheet, Dimensions, Animated } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import HomeItem from './HomeItem'
import { images } from '../constants'
const { width } = Dimensions.get('window')
const data = [
   {
      id: 1,
      image: images.welcome
   },
   {
      id: 2,
      image: images.secure
   },
   {
      id: 3,
      image: images.privacy
   },
   {
      id: 4,
      image: images.encrypted
   },
]
export default Home = (props) => {
   const x = new Animated.Value(0)
   const layout = 14 + 15;
   const translateX = x.interpolate({
      inputRange: [0, width * (data.length - 1)],
      outputRange: [0, layout * (data.length - 1)],
      extrapolate: 'clamp'
   })
   return (
      <View style={styles.fill}>
         <Animated.FlatList
            scrollEventThrottle={16}
            onScroll={Animated.event(
               [{ nativeEvent: { contentOffset: { x } } }],
               { useNativeDriver: true },
            )}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            pagingEnabled={true}
            data={data}
            keyExtractor={(item) => `${item.id}`}
            renderItem={({ item }) => <HomeItem item={item} />}
         />
         <View style={styles.viewCheck}>
            {
               data.map((item) => <View key={`${item.id}`} style={[styles.unChecked]} />)
            }
            <Animated.View
               style={[
                  styles.unChecked,
                  styles.checked,
                  { left: 0, top: 0, marginHorizontal: 0, transform: [{ translateX }] }
               ]}
            />
         </View>
         <View style={styles.viewButton}>
            <TouchableOpacity
               style={styles.buttonGet}
               onPress={() => props.navigation.navigate('Connected')}
            >
               <Text style={styles.textGet}>Get Started</Text>
            </TouchableOpacity>
         </View>
      </View>
   )
}
const styles = StyleSheet.create({
   fill: {
      flex: 1,
      alignItems: 'center'
   },
   viewCheck: {
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      paddingBottom: 25,
      width: data.length * 15 + (data.length - 1) * 14,
      position: 'relative'
   },
   unChecked: {
      width: 15,
      height: 15,
      borderRadius: 15,
      borderColor: '#000',
      borderWidth: 1,
      marginHorizontal: 7,
   },
   checked: {
      width: 15,
      height: 15,
      borderColor: '#2196f3',
      backgroundColor: '#2196f3',
      position: 'absolute',
      top: -1,
   },
   viewButton: {
      paddingBottom: 30,
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 2,
   },
   buttonGet: {
      elevation: 2,
      width: 170,
      height: 45,
      borderRadius: 40,
      backgroundColor: '#2196f3',
      justifyContent: 'center',
      alignItems: 'center',
   },
   textGet: {
      fontSize: 18,
      color: '#FFF',
   }
});