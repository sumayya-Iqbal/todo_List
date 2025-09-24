import React from 'react';

export default function Filter({ filter, setFilter, count }) {
  return (
    <div className="filter-row">
      <div className="left">{count} task{count !== 1 ? 's' : ''}</div>
      <div className="right">
        <button className={filter === 'all' ? 'chip active' : 'chip'} onClick={() => setFilter('all')}>All</button>
        <button className={filter === 'active' ? 'chip active' : 'chip'} onClick={() => setFilter('active')}>Active</button>
        <button className={filter === 'completed' ? 'chip active' : 'chip'} onClick={() => setFilter('completed')}>Completed</button>
      </div>
    </div>
  );
}
