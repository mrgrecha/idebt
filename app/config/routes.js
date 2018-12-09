import { createBottomTabNavigator, createDrawerNavigator, createStackNavigator, DrawerItems } from 'react-navigation';
import HomeScreen from '../screens/home';
import IssuesScreen from '../screens/issues';
import OffersScreen from '../screens/offers';
import StatisticsScreen from '../screens/statistics';
import MenuHeader from '../components/HOC/menuHeader';
import IssueFormScreen from '../screens/forms/issueForm';
import OfferFormScreen from '../screens/forms/offerForm';
import signInScreen from '../screens/auth/signIn';
import signUpScreen from '../screens/auth/signUp';
import OffersSwiperScreen from '../screens/swipers/offersSwiper';
import IssuesSwiperScreen from '../screens/swipers/issuesSwiper';
import OnOfferDebtsScreen from '../screens/debts/onOffers';
import OnIssueDebtsScreen from '../screens/debts/onIssues';
import SettingsScreen from '../screens/settings';
import ChangeBalanceScreen from '../screens/settings/changeBalance';
import CreditCardScreen from '../screens/settings/creditCard';
import GeneralInformationScreen from '../screens/settings/generalInformation';
import passwordScreen from '../screens/settings/passwordScreen';
import DrawerContent from '../components/HOC/customDrawer';

export const SettingsStackScreen = createStackNavigator(
  {
    Settings: {
      screen: MenuHeader(SettingsScreen),
    },
    ChangeBalance: {
      screen: ChangeBalanceScreen
    },
    CreditCard: {
      screen: CreditCardScreen
    },
    GeneralInformation: {
      screen: GeneralInformationScreen
    },
    Password: {
      screen: passwordScreen
    }
  },
);

export const OffersStackScreen = createStackNavigator(
  {
    Offer: {
      screen: MenuHeader(OffersScreen),
    },
    IssuesSwiper: {
      screen: IssuesSwiperScreen
    }
  },
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
    Offers: {
      screen: OffersStackScreen,
    },
    Statistics: {
      screen: MenuHeader(StatisticsScreen),
    },
    Settings: {
      screen: SettingsStackScreen,
    },
  },
  {
    contentComponent: DrawerContent,
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
