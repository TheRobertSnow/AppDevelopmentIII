import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import StackNavigator from './src/routes';
import reducers from './src/reducers';

export default function App() {
  return (
    <Provider store={createStore(reducers)}>
      <StackNavigator />
    </Provider>
  );
}
