import { CHANGE_BUTTON_COLOR } from '../constants';

const initialState = {
  foo: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_BUTTON_COLOR:
      return { ...state, foo: action.color };
    default:
      return state;
  }
};
