import React from 'react'
import { View, SafeAreaView, Text, StyleSheet, TouchableOpacity, Switch, ScrollView, TextInput, Animated } from 'react-native';
import Slider from '@react-native-community/slider';
import HeaderApp from '../customs/HeaderApp'
import Title from '../customs/Title'
import { sizes, colors, width } from '../../constant';
const FULL_WIDTH = width - sizes.padding * 2.5 * 2;

const InputEdit = ({title, value, onSave}) => {
   const translateX = new Animated.Value(0)
   const [ val, setVal] = React.useState("")
   const setValue = (val) => setVal(val);
   const showEdit = function(){
      Animated.timing(translateX, {
         toValue: FULL_WIDTH,
         duration: 1000
      }).start()
   }
   const hideEdit = function(){
      Animated.timing(translateX, {
         toValue: 0,
         duration: 1000
      }).start()
   }
   const saveEdit = function(){
      hideEdit()
      onSave(val)
   }
   return(
      <>
         <Text style={styles.textTitle}>{title}</Text>
         <View style={styles.viewContent}>
            <Text style={styles.textContent}>{value}</Text>
            <TouchableOpacity
               onPress={showEdit}
            >
               <Text style={styles.textButtonEdit}>Edit</Text>
            </TouchableOpacity>
            <Animated.View style={[styles.inputLeft, { transform: [{translateX}]}]}>
               <TouchableOpacity
                  onPress={hideEdit}
               >
                  <Text style={[styles.textButtonEdit, { color: colors.accent}]}>Cancel</Text>
               </TouchableOpacity>
               <TextInput 
                  placeholder={value}
                  onChangeText={setValue}
                  style={styles.textInput}
               />
               <TouchableOpacity
                  onPress={saveEdit}
               >
                  <Text style={styles.textButtonEdit}>Save</Text>
               </TouchableOpacity>
            </Animated.View>
         </View>
      </>
   )
}

export default function Index(props) {
   const [ notification, setNotification ] = React.useState(true)
   const [ newsletter, setNewsletter ] = React.useState(false)
   const [ username, setUsername ] = React.useState("Paul");
   const [ location, setLocation ] = React.useState("Milan");
   const [ email, setEmail ] = React.useState("Email@gmail.com");
   const [ budget, setBudget ] = React.useState(255);
   const [ monthlyCap, setMonthlyCap ] = React.useState(3250);
   const changeBudget = (val) => setBudget(val);
   const changeMonthlyCap = (val) => setMonthlyCap(val);
   return (
      <SafeAreaView style={styles.fill}>
         <HeaderApp back navigation={props.navigation} />
         <Title title={"Setting"} setting navigation={props.navigation} styles={{ paddingHorizontal: sizes.padding * 2.5,}} />
         <ScrollView style={styles.container}>
            <View style={styles.box}>
               <InputEdit title={'Username'} value={username} onSave={setUsername} />
               <InputEdit title={'Location'} value={location} onSave={setLocation}/>
               <InputEdit title={'Email'} value={email} onSave={setEmail}/>
            </View>
            <View style={styles.box2}>
               <Text style={styles.textTitle}>Budget</Text>
               <Slider
                  step={1}
                  maximumValue={1000}
                  minimumTrackTintColor={colors.secondary}
                  thumbTintColor={colors.secondary}
                  maximumTrackTintColor={colors.gray2}
                  onValueChange={changeBudget}
                  value={budget}
                  style={styles.slider}
               />
               <Text style={styles.textRightSlider}>{budget}$</Text>

               <Text style={[styles.textTitle, { paddingTop: sizes.padding * 2.5,}]}>Monthly Cap</Text>
               <Slider
                  step={1}
                  maximumValue={5000}
                  minimumTrackTintColor={colors.secondary}
                  thumbTintColor={colors.secondary}
                  maximumTrackTintColor={colors.gray2}
                  onValueChange={changeMonthlyCap}
                  value={monthlyCap}
                  style={styles.slider}
               />
               <Text style={styles.textRightSlider}>{monthlyCap}$</Text>
            </View>
            <View style={[styles.box2, styles.box3]}>
               <View style={[styles.boxSwitch, styles.boxSwitchPadding]}>
                  <Text style={styles.textTitle}>Notification</Text>
                  <Switch
                     value={notification}
                     thumbColor={colors.secondary}
                     onChange={()=>setNotification(!notification)}
                  />
               </View>
               <View style={styles.boxSwitch}>
                  <Text style={styles.textTitle}>Newsletter</Text>
                  <Switch
                     value={newsletter}
                     thumbColor={colors.secondary}
                     onChange={()=>setNewsletter(!newsletter)}
                  />
               </View>
            </View>
         </ScrollView>
      </SafeAreaView>
   )
}

const styles = StyleSheet.create({
   fill: {
      flex: 1,
   },
   container: {
      paddingHorizontal: sizes.padding * 2.5
   },
   box: {
      borderBottomColor: colors.gray2,
      borderBottomWidth: 1,
      paddingBottom: sizes.padding * 1.5,
      paddingTop: sizes.padding
   },
   box2: {
      borderBottomColor: colors.gray2,
      borderBottomWidth: 1,
      paddingBottom: sizes.padding  * 3,
      paddingTop: sizes.padding * 3
   },
   box3: {
      borderBottomWidth: 0,
   },
   textTitle: {
      fontSize: sizes.caption,
      color: colors.gray,
      paddingBottom: sizes.padding * 0.5,
   },
   viewContent: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingBottom: sizes.padding * 1.5,
   },
   textContent: {
      fontSize: sizes.font,
      color: colors.black,
   },
   textButtonEdit: {
      fontSize: sizes.font,
      color: colors.secondary
   },
   slider: { 
      // width: '100%', 
      // paddingTop: sizes.padding * 2.5
   },
   textRightSlider: {
      fontSize: sizes.caption,
      color: colors.gray,
      textAlign: "right"
   },
   boxSwitch: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',

   },
   boxSwitchPadding: {
      paddingBottom: sizes.padding * 1.5
   },
   inputLeft: {
      position: 'absolute',
      zIndex: 2,
      width: '100%',
      left: "-100%",
      backgroundColor: colors.white,
      top: -5,
      bottom: 0,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      color: colors.black
   },
   textInput: { 
      backgroundColor: colors.gray2, 
      borderRadius: 5,
      // height: 37,
      fontSize: sizes.base,
      flex: 1,
      marginHorizontal: sizes.padding,
      paddingHorizontal: sizes.padding,
      textAlignVertical: 'center'
   }
});