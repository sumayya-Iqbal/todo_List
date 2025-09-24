import React from 'react';
import TodoItem from './TodoItem';

export default function TodoList({ tasks, onToggle, onDelete, onEdit }) {
  if (!tasks || tasks.length === 0) {
    return <p className="empty">No tasks — add your first one above ✨</p>;
  }

  return (
    <ul className="todo-list">
      {tasks.map(task => (
        <TodoItem
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </ul>
  );
}
