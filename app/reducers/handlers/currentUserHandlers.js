import {
  SIGN_IN,
  SIGN_UP,
  SIGN_OUT,
  DATA_LOADED,
  FETCH_USER_DATA,
  INITALIZE_WITH_DATA_FROM_STORAGE,
  REPLENISH_BALANCE,
  WITHDRAW_BALANCE
} from '../../constants';

export default {
  [SIGN_IN.SUCCESS]: (state, action) => state.set('authToken', action.response.token),
  // TO DO Change format for saving token after Alex will fix it on backend
  [SIGN_UP.SUCCESS]: (state, action) => state.set('authToken', action.response),
  [FETCH_USER_DATA.SUCCESS]: (state, action) => state.set('data', action.response),
  [REPLENISH_BALANCE.SUCCESS]: (state, action) => state.set('replanishBalance', action.response),
  [WITHDRAW_BALANCE.SUCCESS]: (state, action) => state.set('withdrawBalance', action.response),
  [SIGN_OUT]: state => state.set('authToken', null),
  [DATA_LOADED]: state => state.set('isLoaded', true),
  [INITALIZE_WITH_DATA_FROM_STORAGE]: (state, action) => state.set('authToken', action.payload.authToken),
};
