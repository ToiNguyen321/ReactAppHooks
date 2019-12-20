import React from 'react';
import { Keyboard, TouchableOpacity } from 'react-native';


export default function KeyBoardDismiss({ children, style }) {
   return (
      <TouchableOpacity 
         activeOpacity={1}
         onPress={()=>Keyboard.dismiss()}
         style={{...style}}
      >
         {children}
      </TouchableOpacity>
   )
}
