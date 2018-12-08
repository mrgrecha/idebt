import { createBottomTabNavigator, createDrawerNavigator, createStackNavigator } from 'react-navigation';
import HomeScreen from '../screens/home';
import IssuesScreen from '../screens/issues';
import HistoryScreen from '../screens/history';
import OffersScreen from '../screens/offers';
import StatisticsScreen from '../screens/statistics';
import MenuHeader from '../components/HOC/menuHeader';
import IssueFormScreen from '../screens/forms/issueForm';
import OfferFormScreen from '../screens/forms/offerForm';
import signInScreen from '../screens/auth/signIn';
import signUpScreen from '../screens/auth/signUp';
import OffersSwiperScreen from '../screens/swipers/offersSwiper';
import IssuesSwiperScreen from '../screens/swipers/issuesSwiper';
import ProfileScreen from '../screens/profile';
import OnOfferDebtsScreen from '../screens/debts/onOffers';
import OnIssueDebtsScreen from '../screens/debts/onIssues';


export const OffersStackScreen = createStackNavigator(
  {
    Offer: {
      screen: MenuHeader(OffersScreen),
    },
    IssuesSwiper: {
      screen: IssuesSwiperScreen
    }
  },
  {
    headerMode: 'none',
  }
);

export const IssuesStackScreen = createStackNavigator(
  {
    Issue: {
      screen: MenuHeader(IssuesScreen),
    },
    OffersSwiper: {
      screen: OffersSwiperScreen
    }
  },
  {
    headerMode: 'none',
  }
);

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
);

export const DebtsTabs = createBottomTabNavigator(
  {
    onOfferDebts: { screen: MenuHeader(OnOfferDebtsScreen) },
    onIssueDebts: { screen: MenuHeader(OnIssueDebtsScreen) },
  },
  {
    animationEnabled: true,
  },
);

export const RootStack = createDrawerNavigator(
  {
    Home: {
      screen: MainScreen,
    },
    Issues: {
      screen: IssuesStackScreen,
    },
    Debts: {
      screen: DebtsTabs,
    },
    History: {
      screen: MenuHeader(HistoryScreen),
    },
    Offers: {
      screen: OffersStackScreen,
    },
    Profile: {
      screen: MenuHeader(ProfileScreen),
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
