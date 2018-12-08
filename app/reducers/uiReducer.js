import { fromJS } from 'immutable';
import uiHandlers from './handlers/uiHandlers';

const ACTION_HANDLERS = {
  ...uiHandlers,
};

const initialState = {
  errorModal:{
    visible: false,
    text: ''
  },
};

export default function homeReducer(state = initialState, action) {
  const newState = fromJS(state);
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(newState, action).toJS() : newState.toJS();
}
