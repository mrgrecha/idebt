import { combineReducers } from 'redux';
import home from './homeReducer';
import options from './optionsReducer';
import current_user from './currentUserReducer';

export default combineReducers({
    home,
    options,
    current_user,
});
