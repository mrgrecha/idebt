import { createBottomTabNavigator, createDrawerNavigator } from 'react-navigation';
import HomeScreen from '../screens/home';
import DebtsScreen from '../screens/debts';
import HistoryScreen from '../screens/history';
import RequestsScreen from '../screens/requests';
import StatisticsScreen from '../screens/statistics';

import signInScreen from '../screens/auth/signIn';
import signUpScreen from '../screens/auth/signUp';
import MyCarousel from '../screens/snap';


export const RootStack = createDrawerNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Debts: {
      screen: DebtsScreen,
    },
    History: {
      screen: HistoryScreen,
    },
    Requests: {
      screen: RequestsScreen,
    },
    Statistics: {
      screen: StatisticsScreen,
    },
  }
);

export const AuthTabs = createBottomTabNavigator(
  {
    SignIn: { screen: signInScreen },
    SignUp: { screen: signUpScreen },
  },
  {
    animationEnabled: true,
  },
);
