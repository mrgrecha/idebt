import { fromJS } from 'immutable';
import debtsHandlers from './handlers/debtsHandlers';

const ACTION_HANDLERS = {
  ...debtsHandlers,
};

const initialState = {
  debtsIOwe: [],
};

export default function homeReducer(state = initialState, action) {
  const newState = fromJS(state);
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(newState, action).toJS() : newState.toJS();
}
