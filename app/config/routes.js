import HomeScreen from '../screens/Home';
import OptionsScreen from '../screens/Options';
import { createStackNavigator } from 'react-navigation';

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Options: OptionsScreen,
  },
  {
    initialRouteName: 'Home',
  }
);

export default RootStack;
