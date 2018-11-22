import { SIGN_IN, SIGN_OUT } from '../../constants';

export default {
  [SIGN_IN]: (state) => {
    return state.set('isLogged', true);
  },
  [SIGN_OUT]: (state) => {
    return state.set('isLogged', false);
  }
};
