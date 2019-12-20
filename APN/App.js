import React, { Component } from 'react'
import AppContainer from './navigator/AppContainer'
import { CounterProvider } from './redux/Context'

export default class App extends Component {
   render() {
      return (
         <CounterProvider>
            <AppContainer />
         </CounterProvider>
      )
   }
}
