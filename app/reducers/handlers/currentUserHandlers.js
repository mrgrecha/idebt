import { SIGN_IN, SIGN_OUT } from '../../constants';

export default {
  [SIGN_IN]: state => state.set('isLogged', true),
  [SIGN_OUT]: state => state.set('isLogged', false),
};
