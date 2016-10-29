import { combineReducers } from 'redux';
import { default as todos } from './todosReducer';
import { default as visibilityFilter } from './visibilityFilterReducer';

const initialState = {
  todos: [],
  visibilityFilter: '',
};

const todoReducer = combineReducers({
  todos,
  visibilityFilter,
}, initialState);

export default todoReducer;
