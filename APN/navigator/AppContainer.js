import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Home from "../components/Home";
import Connected from "../components/Connected";

const stackContainer = createStackNavigator({
   Home: Home,
   Connected: Connected
},
{
   defaultNavigationOptions: () => ({
      mode: 'card',
   }),
   initialRouteName: 'Connected',
   headerMode: 'none'
})

export default AppContainer = createAppContainer(stackContainer);