import React from 'react';
import { Feed } from './pages';
import { Provider } from 'react-redux';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <Feed />
    </Provider>
  );
}

App.displayName = 'App';

export default App;
