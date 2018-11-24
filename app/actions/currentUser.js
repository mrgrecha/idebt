import { SIGN_IN, SIGN_OUT } from '../constants';
import { clearDataInStorage } from '../helpers/storage';

export const signIn = () => ({
  type: SIGN_IN,
});

export const signOut = () => (dispatch) => {
  clearDataInStorage().then(() => {
    dispatch({ type: SIGN_OUT });
  });
};
