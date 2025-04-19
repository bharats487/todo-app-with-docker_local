import React from 'react';

function TodoItem({ todo, toggleTodo, deleteTodo }) {
  return (
    <li className="todo-item">
      <span className={`todo-text ${todo.completed ? 'todo-completed' : ''}`}>
        {todo.text}
      </span>
      <div className="todo-actions">
        <button
          className="complete-btn"
          onClick={() => toggleTodo(todo.id)}
        >
          {todo.completed ? 'Undo' : 'Complete'}
        </button>
        <button
          className="delete-btn"
          onClick={() => deleteTodo(todo.id)}
        >
          Delete
        </button>
      </div>
    </li>
  );
}

export default TodoItem; 