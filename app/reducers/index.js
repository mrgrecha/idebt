import { combineReducers } from 'redux';
import home from './homeReducer';
import currentUser from './currentUserReducer';
import offers from './offersReducer';
import issues from './issuesReducer';
import debts from './debtsReducer';

export default combineReducers({
  home,
  currentUser,
  offers,
  issues,
  debts,
});
