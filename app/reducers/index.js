import { combineReducers } from 'redux';
import home from './homeReducer';
import currentUser from './currentUserReducer';
import offers from './offersReducer';
import issues from './issuesReducer';

export default combineReducers({
  home,
  currentUser,
  offers,
  issues,
});
