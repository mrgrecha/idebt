import { SIGN_IN } from '../constants';

const initialState = {
  isLoaded: false,
  isLogged: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    // TO DO Dima add immutable
    case SIGN_IN:
      return { isLoaded: false, isLogged: true };
    default:
      return state;
  }
};
