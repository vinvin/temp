# Temp repo.

Just a todo list app.

## API

```
type Todo = {
  id: number,
  title: string,
  completed: boolean
};

- GET http://localhost:8000/api/todo => Array<Todo>
- POST http://localhost:8000/api/todo { id, completed } => Array<Todo>
- PATCH http://localhost:8000/api/todo/:id { id, completed } => Todo
- DELETE http://localhost:8000/api/todo/:id => void
```

## Proxy

`npm run start:api`

Start a proxy that listens to 8000:

- / => localhost:3000 on the React app
- /api => localhost:5555 on the mocks
