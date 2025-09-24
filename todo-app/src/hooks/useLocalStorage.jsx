import { useState, useEffect } from 'react';

/**
 * Tiny hook to keep a state value synced with localStorage.
 * Usage: const [tasks, setTasks] = useLocalStorage('tasks', []);
 */
export default function useLocalStorage(key, initialValue) {
  const [state, setState] = useState(() => {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : initialValue;
    } catch (e) {
      console.error('useLocalStorage read error', e);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(state));
    } catch (e) {
      console.error('useLocalStorage write error', e);
    }
  }, [key, state]);

  return [state, setState];
}
