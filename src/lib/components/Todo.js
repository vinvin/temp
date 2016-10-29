import React, { PropTypes } from 'react';

const Todo = ({ onClick, completed, text, removeClick }) => (
  <li>
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
      style={{
        textDecoration: completed ? 'line-through' : 'none',
      }}
    >
      {text}
    </a>
    {' | '}
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault();
        removeClick();
      }}
    >
      {'[X]'}
    </a>
  </li>
);

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  removeClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

export default Todo;
