import React from 'react';

const TodoItem = ({ todo, onDelete, onToggle }) => {
  const { id, title, description, date, completed } = todo;

  return (
    <li>
      <h3>{title}</h3>
      <p>{description}</p>
      <p>{date}</p>
      <label>
        Completed:
        <input type="checkbox" checked={completed} onChange={() => onToggle(id)} />
      </label>
      <button onClick={() => onDelete(id)}>Delete</button>
    </li>
  );
};

export default TodoItem;
