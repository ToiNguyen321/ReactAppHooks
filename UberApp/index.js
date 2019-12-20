import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import MapView from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import Search from './components/search'
export default index = () => {
   const [region, setRegion] = useState(null)
   useEffect(() => {
      Geolocation.getCurrentPosition(
         position => {
            const { latitude, longitude } = position.coords;
            setRegion({
               latitude,
               longitude,
               latitudeDelta: 0.0143,
               longitudeDelta: 0.0134,
            });
         },
         error => console.log(error.message),
         {
            enableHighAccuracy: true,
            timeout: 20000,
            maximumAge: 1000
         }
      );
   }, [])
   return (
      <View style={{ flex: 1, }}>
         <MapView
            style={{ flex: 1 }}
            region={region}
            showsUserLocation
            loadingEnabled
         />
         <Search />
      </View>
   )
}
