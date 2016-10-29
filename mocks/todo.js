import { createAction, createSelector } from 'bouchon';

const actions = {
  get: createAction('Get todos'),
  post: createAction('Post a new todo'),
  patch: createAction('Patch a todo'),
  delete: createAction('Delete a todo'),
};

const reducer = {
  [actions.get]: state => state,
  [actions.post]: (state, { req }) => {
    const { title, completed } = req.body;

    const todoId = Math.max(...state.map(todo => Number(todo.id))) + 1;
    const newTodo = {
      id: todoId,
      title,
      completed,
    };

    return [
      ...state,
      newTodo,
    ];
  },
  [actions.patch]: (state, { req }) => {
    const { id } = req.params;
    const { title, completed } = req.body;

    return state.map(todo => {
      if (Number(todo.id) === Number(id)) {
        return {
          ...todo,
          title,
          completed,
        };
      }

      return todo;
    });
  },
  [actions.delete]: (state, { params }) => (
    state.filter(todo => Number(todo.id) !== Number(params.id))
  ),
};

const selectors = {};

selectors.all = () => state => state.todo;

selectors.last = () => createSelector(
  selectors.all(),
  todos => todos.slice(0).pop(),
);

selectors.byId = ({ id }) => createSelector(
  selectors.all(),
  todos => todos.filter(todo => Number(todo.id) === Number(id)).pop()
);

const routes = {
  'GET /': {
    action: actions.get,
    selector: selectors.all,
    status: 200,
  },
  'GET /:id': {
    action: actions.get,
    selector: selectors.byId,
    status: 200,
  },
  'POST /': {
    action: actions.post,
    selector: selectors.last,
    status: 201,
  },
  'PATCH /:id': {
    action: actions.patch,
    selector: selectors.byId,
    status: 200,
  },
  'DELETE /:id': {
    action: actions.delete,
    status: 204,
  },
};

export default {
  name: 'todo',
  data: require('./todo.json'),
  endpoint: 'api/todo',
  reducer,
  routes,
};
