import { fromJS } from 'immutable';
import issuesHandlers from './handlers/issuesHandlers';

const ACTION_HANDLERS = {
  ...issuesHandlers,
};

const initialState = {
  issues: [],
  currentIssueId: null,
  suitableOffers: null,
};

export default function homeReducer(state = initialState, action) {
  const newState = fromJS(state);
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(newState, action).toJS() : newState.toJS();
}
