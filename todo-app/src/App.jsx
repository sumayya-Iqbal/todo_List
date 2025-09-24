import React from 'react';
import Header from './components/Header';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import Filter from './components/Filter';
import useLocalStorage from './hooks/useLocalStorage';

function App() {
  const [tasks, setTasks] = useLocalStorage('tasks', []);
  const [filter, setFilter] = React.useState('all'); // all | active | completed

  const addTask = (text) => {
    const cleaned = text.trim();
    if (!cleaned) return;
    const newTask = { id: Date.now(), text: cleaned, completed: false };
    setTasks(prev => [newTask, ...prev]);
  };

  const toggleTask = (id) => {
    setTasks(prev => prev.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const deleteTask = (id) => {
    setTasks(prev => prev.filter(t => t.id !== id));
  };

  const editTask = (id, newText) => {
    const cleaned = newText.trim();
    if (!cleaned) return;
    setTasks(prev => prev.map(t => t.id === id ? { ...t, text: cleaned } : t));
  };

  const filteredTasks = React.useMemo(() => {
    if (filter === 'active') return tasks.filter(t => !t.completed);
    if (filter === 'completed') return tasks.filter(t => t.completed);
    return tasks;
  }, [tasks, filter]);

  return (
    <div className="app-root">
      <Header />
      <main className="card">
        <TodoInput onAdd={addTask} />
        <Filter filter={filter} setFilter={setFilter} count={tasks.length} />
        <TodoList
          tasks={filteredTasks}
          onToggle={toggleTask}
          onDelete={deleteTask}
          onEdit={editTask}
        />
      </main>
    </div>
  );
}

export default App;
