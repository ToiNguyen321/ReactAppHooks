import React from 'react'
import { View, Text, Modal, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { sizes, colors } from '../../constant';
import { terms } from '../../constant/mocks';

export default function TermsOfService({ modalVisible, setModalVisible }) {

   return (
      <Modal
         animationType="slide"
         transparent={false}
         visible={modalVisible}
      >
         <View style={styles.container}>
            <Text style={styles.title}>Terms of service</Text>
            <TouchableOpacity
               onPress={setModalVisible}
               style={styles.buttonClose}
            >
               <Text style={styles.textButtonClose}>X</Text>
            </TouchableOpacity>
            <ScrollView>
               <Text style={styles.textContent}>{terms}</Text>
            </ScrollView>
         </View>
      </Modal>
   )
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
   },
   title: {
      fontSize: sizes.h1,
      fontWeight: 'bold',
      textAlign: 'center',
      textDecorationLine: 'underline',
      textDecorationStyle: 'solid',
      textDecorationColor: colors.gray2,
      paddingVertical: sizes.padding * 1.5,
      paddingBottom: sizes.padding * 1.5,
      color: colors.black,
   },
   buttonClose: {
      position: 'absolute',
      right: 5,
      top: 5,
      width: 30,
      height: 30,
      borderRadius: 30,
      backgroundColor: colors.gray,
      justifyContent: 'center',
      alignItems: 'center'
   },
   textButtonClose: {
      fontSize: sizes.h2,
      color: colors.white
   },
   textContent: {
      fontSize: sizes.font,
      color: colors.gray,
      lineHeight: 20,
      paddingHorizontal: sizes.padding * 2.5,
      textAlign: 'justify',
      paddingBottom: sizes.padding * 2.5,
   }
});
