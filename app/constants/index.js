import { LOCAL_API_IP } from 'react-native-dotenv';

const asyncActionType = type => ({
  PENDING: `${type}_PENDING`,
  SUCCESS: `${type}_SUCCESS`,
  ERROR: `${type}_ERROR`,
});

// App settings
export const BASE_API_URL = LOCAL_API_IP;

export const AJAX = 'AJAX';
export const INITALIZE_WITH_DATA_FROM_STORAGE = 'INITALIZE_WITH_DATA_FROM_STORAGE';

// API requests
export const FETCH_STATISTICS = asyncActionType('FETCH_STATISTICS');
export const FETCH_USER_DATA = asyncActionType('FETCH_USER_DATA');
export const FETCH_OFFERS = asyncActionType('FETCH_OFFERS');
export const FETCH_ISSUES = asyncActionType('FETCH_ISSUES');
export const FETCH_SUITABLE_OFFERS = asyncActionType('FETCH_SUITABLE_OFFERS');
export const FETCH_SUITABLE_ISSUES = asyncActionType('FETCH_SUITABLE_ISSUES');
export const FETCH_DEBTS_I_OWE = asyncActionType('FETCH_DEBTS_I_OWE');
export const FETCH_DEBTS_OWE_ME = asyncActionType('FETCH_DEBTS_OWE_ME');
export const REPAY_DEBTS = asyncActionType('REPAY_DEBTS');
export const SIGN_UP = asyncActionType('SIGN_UP');
export const CREATE_ISSUE = asyncActionType('CREATE_ISSUE')
export const CREATE_OFFER = asyncActionType('CREATE_OFFER')
export const CREATE_OFFER_MATCH = asyncActionType('CREATE_OFFER_MATCH')
export const CREATE_ISSUE_MATCH = asyncActionType('CREATE_ISSUE_MATCH')
export const SIGN_IN = asyncActionType('SIGN_IN');
export const REPLENISH_BALANCE = asyncActionType('REPLENISH_BALANCE');
export const WITHDRAW_BALANCE = asyncActionType('WITHDRAW_BALANCE');
export const UPDATE_PASSWORD = asyncActionType('UPDATE_PASSWORD');


// App constants
export const SIGN_OUT = 'SIGN_OUT';
export const CHOOSE_OFFER = 'CHOOSE_OFFER';
export const CHOOSE_ISSUE = 'CHOOSE_ISSUE';
export const DATA_LOADED = 'DATA_LOADED';
export const CLOSE_ERROR_MODAL = 'CLOSE_ERROR_MODAL';
