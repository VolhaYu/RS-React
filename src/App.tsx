import React from 'react';
import { Provider } from 'react-redux';
import Header from './components/header/header';
import RouterPage from './components/router';
// import store from './store';

function App() {
  return (
    // <Provider store={store}>
    <>
      <Header />
      <RouterPage />
    </>
    // </Provider>
  );
}

export default App;
