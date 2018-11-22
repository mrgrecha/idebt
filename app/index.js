import React from 'react';
import { Provider } from 'react-redux';
import store from './config/store';
import App from './app';

export default () => (
  <Provider store={store}>
    <App/>
  </Provider>
);
