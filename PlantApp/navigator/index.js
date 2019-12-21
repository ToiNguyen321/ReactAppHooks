import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import WelCome from '../components/welcome';
import Login from '../components/login';
import Browse from '../components/browse';
import Explore from '../components/explore';
import Product from '../components/product';

const stackApp = createStackNavigator(
   {
      WelCome: WelCome,
      Login: Login,
      Browse: Browse,
      Explore: Explore,
      Product: Product
   },
   {
      initialRouteName: 'WelCome',
      headerMode: 'none'
   }
)
export default AppContainer = createAppContainer(stackApp);