import React, { Component } from 'react'
import { Text, StyleSheet, View, Platform } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
const homePlace = { description: 'Home', geometry: { location: { lat: 48.8152937, lng: 2.4597668 } }};
const workPlace = { description: 'Work', geometry: { location: { lat: 48.8496818, lng: 2.2940881 } }};
export default class index extends Component {
   render() {
      return (
         <GooglePlacesAutocomplete
            placeholder='Search'
            fetchDetails
            onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
               console.log(data, details);
            }}
            filterReverseGeocodingByTypes={['locality', 'administrative_area_level_3']} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities
            predefinedPlaces={[homePlace, workPlace]}
            query={{
               // available options: https://developers.google.com/places/web-service/autocomplete
               key: 'AIzaSyB1O8amubeMkw_7ok2jUhtVj9IkME9K8sc',
               language: 'en', // language of the results
            }}
            styles={{
               textInputContainer: {
                  width: '100%'
               },
               description: {
                  fontWeight: 'bold'
               },
               predefinedPlacesDescription: {
                  color: '#1faadb'
               }
            }}
         />

      )
   }
}

const styles = StyleSheet.create({
   textInputContainer: {
      position: 'absolute',
      top: Platform.select({ android: 40, ios: 60 }),
      left: 0,
      right: 0,
   }
})
