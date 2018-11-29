const asyncActionType = type => ({
  PENDING: `${type}_PENDING`,
  SUCCESS: `${type}_SUCCESS`,
  ERROR: `${type}_ERROR`,
});

// Add your own IP of expo app
// Port is the same as backend
export const BASE_API_URL = 'http://192.168.0.107:8000/';
export const AJAX = 'AJAX';
export const TEST_CONSTANT = asyncActionType('TEST_CONSTANT');

// Auth
export const SIGN_IN = asyncActionType('SIGN_IN');
export const SIGN_OUT = 'SIGN_OUT';
export const STAT = asyncActionType('STAT');
export const SIGN_UP = asyncActionType('SIGN_UP');
export const INITALIZE_WITH_DATA_FROM_STORAGE = 'INITALIZE_WITH_DATA_FROM_STORAGE';
export const DATA_LOADED = 'DATA_LOADED';
