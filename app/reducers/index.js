import { combineReducers } from 'redux';
import home from './homeReducer';
import currentUser from './currentUserReducer';
import offers from './offersReducer';
import issues from './issuesReducer';
import debts from './debtsReducer';
import ui from './uiReducer';

export default combineReducers({
  home,
  currentUser,
  offers,
  issues,
  debts,
  ui,
});
