import {
  SIGN_IN,
  SIGN_UP,
  SIGN_OUT,
  DATA_LOADED,
  FETCH_STATISTICS,
  INITALIZE_WITH_DATA_FROM_STORAGE,
} from '../../constants';

export default {
  [SIGN_IN.SUCCESS]: (state, action) => state.set('authToken', action.response.token),
  // TO DO Change format for saving token after Alex will fix it on backend
  [SIGN_UP.SUCCESS]: (state, action) => state.set('authToken', action.response),
  [FETCH_STATISTICS.SUCCESS]: (state, action) => state.set('data', action.response),
  [SIGN_OUT]: state => state.set('authToken', null),
  [DATA_LOADED]: state => state.set('isLoaded', true),
  [INITALIZE_WITH_DATA_FROM_STORAGE]: (state, action) => state.set('authToken', action.payload.authToken),
};
