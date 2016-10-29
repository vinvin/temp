import { createAction, createReducer } from 'redux-act';

export const addTodo = createAction('Add new todo');
export const toggleTodo = createAction('Marks todo as done or active');
export const removeTodo = createAction('Delete a todo');
export const setVisibilityFilter = createAction('Change filter on todo list');

const initialState = [];

export default createReducer({
  [addTodo]: (state, text) => [
    ...state,
    {
      id: (state.length === 0) ? 1 : state[state.length - 1].id + 1,
      text,
      completed: false,
    },
  ],

  [toggleTodo]: (state, id) =>
    state.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    }),

  [removeTodo]: (state, id) =>
    state.filter(todo => (todo.id !== id)),
}, initialState);
