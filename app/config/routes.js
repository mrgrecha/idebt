import { createBottomTabNavigator, createDrawerNavigator, createStackNavigator } from 'react-navigation';
import HomeScreen from '../screens/home';
import DebtsScreen from '../screens/debts';
import HistoryScreen from '../screens/history';
import RequestsScreen from '../screens/requests';
import StatisticsScreen from '../screens/statistics';
import MenuHeader from '../components/HOC/menuHeader';
import IssueFormScreen from '../screens/forms/issueForm';
import OfferFormScreen from '../screens/forms/offerForm';
import signInScreen from '../screens/auth/signIn';
import signUpScreen from '../screens/auth/signUp';


export const MainScreen = createStackNavigator(
  {
    Home: {
      screen: MenuHeader(HomeScreen),
    },
    Issue: {
      screen: MenuHeader(IssueFormScreen),
    },
    Offer: {
      screen: MenuHeader(OfferFormScreen),
    },
  },
  {
    headerMode: 'none',
  }
  )

export const RootStack = createDrawerNavigator(
  {
    Home: {
      screen: MainScreen,
    },
    Debts: {
      screen: MenuHeader(DebtsScreen),
    },
    History: {
      screen: MenuHeader(HistoryScreen),
    },
    Requests: {
      screen: MenuHeader(RequestsScreen),
    },
    Statistics: {
      screen: MenuHeader(StatisticsScreen),
    },
  },
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
