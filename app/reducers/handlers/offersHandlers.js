import {
  FETCH_OFFERS,
  CHOOSE_OFFER,
  FETCH_SUITABLE_ISSUES
} from '../../constants';

export default {
  [FETCH_OFFERS.SUCCESS]: (state, action) => state.set('offers', action.response.results),
  [CHOOSE_OFFER]: (state, action) => state.set('currentOfferId', action.payload.id),
  [FETCH_SUITABLE_ISSUES.SUCCESS]: (state, action) => state.set('suitableIssues', action.response.results),
};
