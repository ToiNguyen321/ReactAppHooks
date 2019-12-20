import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import WelCome from '../components/welcome';
import Login from '../components/login';

const stackApp = createStackNavigator(
   {
      WelCome: WelCome,
      Login: Login
   },
   {
      headerMode: 'none'
   }
)
export default AppContainer = createAppContainer(stackApp);