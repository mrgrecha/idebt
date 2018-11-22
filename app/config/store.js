import { createStore, applyMiddleware, compose } from 'redux';

import thunk from 'redux-thunk';
import reducers from '../reducers';
import Ajax from './ajax';

const middleware = [thunk, Ajax];

const store = createStore(reducers, compose(applyMiddleware(...middleware)));

export default store;
