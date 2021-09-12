import React from 'react';
import Sidebar from './Sidebar'
import Content from './Content'
import RecentActivity from './RecentActitvity';
import './App.css';

function App() {
  return (
    <div className="patricia__test">
      <Sidebar />
      <Content />
      <RecentActivity />
    </div>
  );
}

export default App;
