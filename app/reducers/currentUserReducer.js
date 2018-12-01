
import { fromJS } from 'immutable';
import currentUserHandlers from './handlers/currentUserHandlers';

const ACTION_HANDLERS = {
  ...currentUserHandlers,
};

const initialState = {
  isLoaded: false,
  testName: '',
  authToken: null,
  data: {},
};

export default function uiReducer(state = initialState, action) {
  const newState = fromJS(state);
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(newState, action).toJS() : newState.toJS();
}
