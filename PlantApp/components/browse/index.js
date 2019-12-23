import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Dimensions, Image, Animated, Platform } from 'react-native';
import Title from '../customs/Title';
import HeaderApp from '../customs/HeaderApp';
import { sizes, colors, icons } from '../../constant';
import { categories } from '../../constant/mocks';

const { width, height } = Dimensions.get('window');
const PADDING_TOP = 50;
const renderTab = (item, index, active, setTabActive) => {
   return (
      <View style={[styles.tab, active && styles.tabActive]} key={index.toString()}>
         <TouchableOpacity
            activeOpacity={0.9}
            onPress={setTabActive}
         >
            <Text style={[styles.titleTab, active && styles.titleTabActive]}>{item}</Text>
         </TouchableOpacity>
      </View>
   )
}
const category = (item, index, navigation) => {
   const marginRight = index % 2 === 0 ? sizes.padding : sizes.padding * 2.5;
   const marginLeft = index % 2 === 0 ? sizes.padding * 2.5 : 0;
   const navigate = () => navigation.navigate('Explore');
   return (
      <TouchableOpacity
         activeOpacity={0.8}
         style={{ paddingRight: marginRight, paddingLeft: marginLeft, backgroundColor: colors.white }}
         key={`${index}`}
         onPress={navigate}
      >
         <View style={[styles.card]}>
            <View style={styles.viewImageCategory} >
               <Image source={item.image} style={styles.imageCategory} />
            </View>
            <Text style={styles.titleCategory}>{item.name}</Text>
            <Text style={styles.numberCategory}>{item.count} products</Text>
         </View>
      </TouchableOpacity>
   )
}
export default function index(props) {
   const [tabActive, setTabActive] = React.useState(0)
   const scrollY = new Animated.Value(0);
   const Tabs = ['Products', 'Inspirations', 'Shop'];
   const translateY = scrollY.interpolate({
      inputRange: [0, PADDING_TOP + 0],
      outputRange: [0, -PADDING_TOP - 0],
      extrapolate: 'clamp'
   })
   return (
      <View style={styles.container}>
         <HeaderApp back={true} navigation={props.navigation} />
         <View style={styles.content}>
            <Title title={"Browse"} navigation={props.navigation} setting styles={{ paddingHorizontal: sizes.padding * 2.5 }} />
            <Animated.View style={[styles.tabs, { transform: [{ translateY }] }]}>
               {Tabs.map((item, index) => renderTab(item, index, tabActive === index, () => setTabActive(index)))}
            </Animated.View>
            <Animated.ScrollView
               showsVerticalScrollIndicator={false}
               scrollEventThrottle={16}
               onScroll={Animated.event(
                  [{nativeEvent: { contentOffset: { y: scrollY } }}],
                  { useNativeDriver: true }
               )}
            >
               <Animated.View style={[styles.cards, { paddingTop: PADDING_TOP }]}>
                  {
                     categories.map((item, index) => category(item, index, props.navigation))
                  }
               </Animated.View>
            </Animated.ScrollView>
         </View>
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
   },
   content: {
      flex: 1,
      // paddingHorizontal: sizes.padding * 2.5
   },
   tabs: {
      position: 'absolute',
      top: PADDING_TOP,
      left: 0,
      right: 0,
      height: 50,
      paddingHorizontal: sizes.padding * 4.5,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: colors.white,
      marginBottom: sizes.padding * 1.5,
      zIndex: 2,
   },
   tab: {
      paddingVertical: sizes.padding * 0.5,
   },
   titleTab: {
      fontSize: sizes.h4,
      color: colors.gray,
      fontWeight: 'bold',
      paddingBottom: 0,
   },
   tabActive: {
      borderBottomColor: colors.primary,
      borderBottomWidth: 4,
   },
   titleTabActive: {
      color: colors.primary,
      fontSize: sizes.h3,
   },
   cards: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      paddingVertical: sizes.padding * 1.5
   },
   card: {
      width: (width - (sizes.padding * 2.5) * 2 - (sizes.padding * 1.5)) / 2,
      maxHeight: (width - (sizes.padding * 2.5) * 2 - (sizes.padding * 1.5)) / 2,
      alignItems: 'center',
      shadowColor: colors.accent,
      backgroundColor: 'white',
      elevation: 8,
      // backgroundColor: 'blue',
      borderRadius: sizes.padding,
      marginBottom: sizes.padding * 1,
      padding: sizes.padding * 2.5,
   },
   viewImageCategory: {
      width: 60,
      height: 60,
      backgroundColor: 'rgba(41,216,143,0.20)',
      borderRadius: 60,
      justifyContent: 'center',
      alignItems: 'center'
   },
   imageCategory: {
      width: 40,
      height: 40
   },
   titleCategory: {
      paddingTop: sizes.padding * 1.5,
      fontSize: sizes.base,
      color: colors.black,
   },
   numberCategory: {
      fontSize: sizes.font,
      color: colors.gray2
   }
});