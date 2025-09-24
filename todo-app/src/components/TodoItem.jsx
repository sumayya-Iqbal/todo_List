import React from 'react';

export default function TodoItem({ task, onToggle, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = React.useState(false);
  const [draft, setDraft] = React.useState(task.text);

  React.useEffect(() => {
    if (!isEditing) setDraft(task.text);
  }, [isEditing, task.text]);

  const handleSave = () => {
    const cleaned = draft.trim();
    if (!cleaned) return;
    onEdit(task.id, cleaned);
    setIsEditing(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSave();
    if (e.key === 'Escape') {
      setDraft(task.text);
      setIsEditing(false);
    }
  };

  return (
    <li className="todo-item">
      <div className="left">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
          aria-label="Toggle task complete"
        />
        {!isEditing ? (
          <span
            className={`task-text ${task.completed ? 'done' : ''}`}
            onDoubleClick={() => setIsEditing(true)}
            title="Double click to edit"
          >
            {task.text}
          </span>
        ) : (
          <input
            className="edit-input"
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            onKeyDown={handleKeyDown}
            autoFocus
          />
        )}
      </div>

      <div className="actions">
        {!isEditing ? (
          <>
            <button className="btn small" onClick={() => setIsEditing(true)}>Edit</button>
            <button className="btn small danger" onClick={() => onDelete(task.id)}>Delete</button>
          </>
        ) : (
          <>
            <button className="btn small" onClick={handleSave}>Save</button>
            <button className="btn small" onClick={() => { setDraft(task.text); setIsEditing(false); }}>Cancel</button>
          </>
        )}
      </div>
    </li>
  );
}
