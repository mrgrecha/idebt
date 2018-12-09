import {
  FETCH_USER_STATISTICS,
} from '../../constants';

export default {
  [FETCH_USER_STATISTICS.SUCCESS]: (state, action) => state.set('statistics', action.response).set('isLoaded', true),
};
