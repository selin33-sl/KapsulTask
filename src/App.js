import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import {store} from './redux/store';
import {AppStack} from './navigators/AppStack';

export const App = () => {
  return (
    <Provider store={store}>
      <AppStack />
    </Provider>
  );
};
