import { combineReducers } from 'redux';
import home from './homeReducer';
import options from './optionsReducer';

export default combineReducers({
    home,
    options
});
