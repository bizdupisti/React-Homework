import React, { useState } from 'react';
import './TodoForm.css';

 

 

const TodoForm = ({ addTodo }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() !== '') {
      addTodo({
        title: title.trim(),
        description: description.trim(),
        completed: false,
        id: new Date().getTime().toString(),
        createdAt: new Date().toISOString()
      });
      setTitle('');
      setDescription('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={handleTitleChange}
        placeholder="Enter a new task"
      />
      <textarea
      className='area'
        value={description}
        onChange={handleDescriptionChange}
        placeholder="Enter a description"
      ></textarea>
      <br />
      <button type="submit">Add</button>
    </form>
  );
};

export default TodoForm;
