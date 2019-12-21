import React from 'react';
import { SafeAreaView } from 'react-native'
import AppContainer from './navigator'
import { colors } from './constant'
export default class PlantApp extends React.Component {
   render() {
      return (
         <SafeAreaView style={{ flex: 1, backgroundColor: colors.gray2 }}>
            <AppContainer />
         </SafeAreaView>
      )
   }
}
