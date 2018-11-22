import { combineReducers } from 'redux';
import home from './homeReducer';
import currentUser from './currentUserReducer';

export default combineReducers({
    home,
    currentUser,
});
