/* global document: true */

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './App';
import { todoReducer } from './lib/todos';


const initialState = {
  todos: [{
    label: 'my first todo',
    done: true,
  }],
};

const store = createStore(todoReducer, initialState);

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
