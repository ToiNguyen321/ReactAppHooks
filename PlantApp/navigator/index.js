import React from 'react'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import WelCome from '../components/welcome';
import Login from '../components/login';
import Browse from '../components/browse';
import Explore from '../components/explore';
import Product from '../components/product';
import Setting from '../components/setting';


const stackApp = createStackNavigator(
   {
      WelCome: WelCome,
      Login: Login,
      Browse: Browse,
      Explore: Explore,
      Product: Product,
      Setting: Setting
   },
   {
      initialRouteName: 'WelCome',
      headerMode: 'none'
   }
)

const drawer = createDrawerNavigator(
   {
      stackApp: stackApp
   },
   {
      drawerWidth: '100%',
      contentComponent: props => <Setting {...props} />
   }
)
export default AppContainer = createAppContainer(drawer);