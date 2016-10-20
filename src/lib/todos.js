import { createReducer } from 'redux-act';

const initialState = {
  todos: ['my first todo'],
};

const todoReducer = createReducer({

}, initialState);

export { todoReducer };
