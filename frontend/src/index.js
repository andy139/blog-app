import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import Root from './components/root';
import configureStore from './store/store';


document.addEventListener('DOMContentLoaded', () => {
  let store = configureStore({})
  const root = document.getElementById('root');

  console.log(store);
  ReactDOM.render(<Root store={store} />, root);


})

serviceWorker.unregister();
