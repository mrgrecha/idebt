import { fromJS } from 'immutable';
import homeHandlers from './handlers/currentUserHandlers';

const ACTION_HANDLERS = {
  ...homeHandlers,
};

const initialState = {
};

export default function homeReducer(state = initialState, action) {
  const newState = fromJS(state);
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(newState, action).toJS() : newState.toJS();
}
