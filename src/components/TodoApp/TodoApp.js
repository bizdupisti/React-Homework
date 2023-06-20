
import './TodoApp.css';

import React, { useState } from 'react';
import TodoForm from '../TodoForm/TodoForm';
import TodoList from '../TodoList/TodoList';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);

  // Функция для добавления нового задания
  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  // Функция для обновления задания по id
  const updateTodo = (id, updatedTodo) => {
    setTodos(todos.map(todo => (todo.id === id ? { ...todo, ...updatedTodo } : todo)));
  };

  // Функция для удаления задания по id
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // Функция для переключения статуса выполнения задания по id
  const toggleTodoCompletion = (id) => {
    setTodos(todos.map(todo => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
  };

  return (
    <div className="todo-app">
    <h1>Todo App</h1>
    <TodoForm addTodo={addTodo} />
    <TodoList
      todos={todos}
      updateTodo={updateTodo}
      deleteTodo={deleteTodo}
      toggleTodoCompletion={toggleTodoCompletion}
    />
  </div>
  );
};

export default TodoApp;
