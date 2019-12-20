/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
import {name as appName} from './app.json';
import PlantApp from './PlantApp/PlantApp.js';
// import App from './APN/App.js';
// import UberApp from './UberApp'

AppRegistry.registerComponent(appName, () => PlantApp);
