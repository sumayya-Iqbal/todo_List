import React from 'react';

export default function TodoInput({ onAdd }) {
  const [value, setValue] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(value);
    setValue('');
  };

  return (
    <form className="todo-input" onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        placeholder="Add a new task and press Enter"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className="btn">Add</button>
    </form>
  );
}
