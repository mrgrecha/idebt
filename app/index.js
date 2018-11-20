import React from 'react';
import { Provider } from 'react-redux';

import { AuthTabs } from './config/routes';
import { RootStack } from './config/routes';
import store from './config/store';

// TO DO get value from async storage about user
const a = false ? (<RootStack/>) : (<AuthTabs/>);
export default () => (
    <Provider store={store}>
      {a}
    </Provider>
);
