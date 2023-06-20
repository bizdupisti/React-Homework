import React from 'react';
import './TodoItem.css'


const TodoItem = ({
  todo,
  isEditing,
  editedTitle,
  editedDescription,
  setEditedTitle,
  setEditedDescription,
  handleCancelEditing,
  handleUpdateTodo,
  handleStartEditing,
  deleteTodo,
  toggleTodoCompletion,
}) => {
  const handleTitleChange = (e) => {
    setEditedTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setEditedDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpdateTodo(todo.id);
  };

  const handleToggleCompletion = () => {
    toggleTodoCompletion(todo.id);
  };

  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={editedTitle}
            onChange={handleTitleChange}
          />
          <textarea
            value={editedDescription}
            onChange={handleDescriptionChange}
          ></textarea>
          <button type="submit">Save</button>
          <button onClick={handleCancelEditing}>Cancel</button>
        </form>
      ) : (
        <>
          <label>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={handleToggleCompletion}
            />
            <span className="todo-title">{todo.title}</span>
            <span className="todo-description"> - {todo.description}</span>
            <span className="todo-date"> - {todo.createdAt}</span>
          </label>
          <button onClick={() => handleStartEditing(todo.id, todo.title, todo.description)}>
            Edit
          </button>
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </>
      )}
    </li>
  );
};

export default TodoItem;
