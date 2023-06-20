import React, { useState } from 'react';
import TodoItem from '../TodoItem/TodoItem';



const TodoList = ({ todos, updateTodo, deleteTodo, toggleTodoCompletion }) => {
  const [editingId, setEditingId] = useState(null);
  const [editedTitle, setEditedTitle] = useState('');
  const [editedDescription, setEditedDescription] = useState('');

  const handleStartEditing = (id, title, description) => {
    setEditingId(id);
    setEditedTitle(title);
    setEditedDescription(description);
  };

  const handleCancelEditing = () => {
    setEditingId(null);
    setEditedTitle('');
    setEditedDescription('');
  };

  const handleUpdateTodo = (id) => {
    if (editedTitle.trim() !== '') {
      updateTodo(id, {
        title: editedTitle,
        description: editedDescription,
      });
    }
    handleCancelEditing();
  };

  const handleToggleCompletion = (id) => {
    toggleTodoCompletion(id);
  };

  return (
    <ul className="todo-list">
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          isEditing={editingId === todo.id}
          editedTitle={editedTitle}
          editedDescription={editedDescription}
          setEditedTitle={setEditedTitle}
          setEditedDescription={setEditedDescription}
          handleCancelEditing={handleCancelEditing}
          handleUpdateTodo={handleUpdateTodo}
          handleStartEditing={handleStartEditing}
          deleteTodo={deleteTodo}
          toggleTodoCompletion={handleToggleCompletion}
        />
      ))}
    </ul>
  );
};

export default TodoList;

