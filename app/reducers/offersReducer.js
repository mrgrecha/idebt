import { fromJS } from 'immutable';
import offersHandlers from './handlers/offersHandlers';

const ACTION_HANDLERS = {
  ...offersHandlers,
};

const initialState = {
  offers: [],
  currentOfferId: null,
  suitableIssues: null,
};

export default function homeReducer(state = initialState, action) {
  const newState = fromJS(state);
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(newState, action).toJS() : newState.toJS();
}
