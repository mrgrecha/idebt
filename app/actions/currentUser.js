import {
  SIGN_IN,
  SIGN_UP,
  STAT,
  SIGN_OUT,
  AJAX,
  INITALIZE_WITH_DATA_FROM_STORAGE,
  DATA_LOADED,
} from '../constants';
import { clearDataInStorage, saveDataInStorage, fetchDataFromStorage } from '../helpers/storage';
import { currentUserAuthTokenSelector } from '../selectors/currentUserSelectors';

export const saveAuthTokenToStorage = () => (dispatch, getState) => {
  const authToken = currentUserAuthTokenSelector(getState());
  saveDataInStorage('authToken', authToken);
};

export const signIn = data => (
  dispatch => dispatch({
    type: AJAX,
    payload: {
      data,
      url: 'user/login/',
      method: 'POST',
      ...SIGN_IN,
    },
  }).then(() => {
    dispatch(saveAuthTokenToStorage());
  })
);

export const signUp = data => (
  dispatch => dispatch({
    type: AJAX,
    payload: {
      data,
      url: 'user/signup/',
      method: 'POST',
      ...SIGN_UP,
    },
  }).then(() => {
    dispatch(saveAuthTokenToStorage());
  })
);

export const signOut = () => (dispatch) => {
  clearDataInStorage().then(() => {
    dispatch({ type: SIGN_OUT });
  });
};

export const initializeWithDataFromStorage = () => (dispatch) => {
  fetchDataFromStorage('authToken').then((authToken) => {
    dispatch({
      type: INITALIZE_WITH_DATA_FROM_STORAGE,
      payload: {
        authToken,
      },
    });
    dispatch({ type: DATA_LOADED });
  });
};


export const statistics = () => (
   {
    type: AJAX,
    payload: {
      url: 'user/me.json',
      method: 'GET',
      ...STAT,
    },
  }
);
