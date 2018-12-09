import { fromJS } from 'immutable';
import statisticsHandlers from './handlers/statisticsHandlers';

const ACTION_HANDLERS = {
  ...statisticsHandlers,
};

const initialState = {
  isLoaded: false,
  statistics: {},
};

export default function statisticsReducer(state = initialState, action) {
  const newState = fromJS(state);
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(newState, action).toJS() : newState.toJS();
}
