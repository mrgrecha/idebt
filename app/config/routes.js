import HomeScreen from '../screens/Home';
import OptionsScreen from '../screens/Options';
import signInScreen from '../screens/auth/signIn';
import signUpScreen from '../screens/auth/signUp';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

export const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Options: OptionsScreen,
  },
  {
    initialRouteName: 'Home',
  }
);

export const AuthTabs = createBottomTabNavigator(
  {
    SignIn: { screen: signInScreen },
    SignUp: { screen: signUpScreen },
  },
  {
    animationEnabled: true,
});
