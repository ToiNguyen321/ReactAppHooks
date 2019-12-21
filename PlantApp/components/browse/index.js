import React from 'react';
import { View, Text, StyleSheet,TouchableOpacity, ScrollView, Dimensions, Image } from 'react-native';
import Title from '../customs/Title';
import HeaderApp from '../customs/HeaderApp';
import { sizes, colors, icons } from '../../constant';

const categories = [1, 2, 3, 4, 5, 6];
const { width, height } = Dimensions.get('window');

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
   return (
      <TouchableOpacity
         activeOpacity={0.8}
         style={{ paddingRight: marginRight, paddingLeft: marginLeft, backgroundColor: colors.white }}
         key={`${index}`}
         onPress={() => navigation.navigate('Explore')}
      >
         <View style={[styles.card]}>
            <View style={styles.viewImageCategory} >
               <Image source={icons.plants} style={styles.imageCategory} />
            </View>
            <Text style={styles.titleCategory}>Plants</Text>
            <Text style={styles.numberCategory}>300 products</Text>
         </View>
      </TouchableOpacity>
   )
}
export default function index(props) {
   const [tabActive, setTabActive] = React.useState(0)
   const Tabs = ['Products', 'Inspirations', 'Shop'];
   return (
      <View style={styles.container}>
         <HeaderApp back={true} navigation={props.navigation} />
         <View style={styles.content}>
            <Title title={"Browse"} styles={{ paddingHorizontal: sizes.padding * 2.5 }} />
            <View style={styles.tabs}>
               {Tabs.map((item, index) => renderTab(item, index, tabActive === index, () => setTabActive(index)))}
            </View>
            <ScrollView
               showsVerticalScrollIndicator={false}
            >
               <View style={styles.cards}>
                  {
                     categories.map((item, index) => category(item, index, props.navigation))
                  }
               </View>
            </ScrollView>
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
      paddingHorizontal: sizes.padding * 4.5,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: colors.white,
      marginBottom: sizes.padding * 1.5,
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
      elevation: 6,
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