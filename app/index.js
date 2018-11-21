import React from 'react';
import { Provider } from 'react-redux';
import store from './config/store';
import App from './app';

// TO DO get value from async storage about user
export default () => (
    <Provider store={store}>
      <App/>
    </Provider>
);
