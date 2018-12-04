import {
  FETCH_ISSUES,
  FETCH_SUITABLE_OFFERS,
  CHOOSE_ISSUE,
} from '../../constants';

export default {
  [FETCH_ISSUES.SUCCESS]: (state, action) => state.set('issues', action.response.results),
  [FETCH_SUITABLE_OFFERS.SUCCESS]: (state, action) => state.set('suitableOffers', action.response.results),
  [CHOOSE_ISSUE]: (state, action) => state.set('currentIssueId', action.payload.id),
};
