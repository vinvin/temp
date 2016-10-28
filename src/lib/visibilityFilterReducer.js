import { createAction, createReducer } from 'redux-act';

export const setVisibilityFilter = createAction('set visibility filter');

const initialState = 'SHOW_ALL';

export default createReducer({
  [setVisibilityFilter]: (state, filter) => filter,
}, initialState);
