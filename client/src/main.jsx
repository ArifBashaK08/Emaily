import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers/index.js';
import {thunk} from "redux-thunk"
import 'materialize-css/dist/css/materialize.min.css';
import './index.css';

const store = createStore(reducers, {}, applyMiddleware(thunk));


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);