import { CHANGE_BUTTON_COLOR } from '../constants';

const initialState = {
  buttonColor: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_BUTTON_COLOR:
      return { ...state, buttonColor: action.color };
    default:
      return state;
  }
};
