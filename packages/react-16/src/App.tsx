import React from 'react';
import logo from './logo.svg';
import './App.css';
import AutomaticBatching from "./components/AutomaticBatching";
import MySuspense from "./components/MySuspense";

function App() {
  return (
    <div className="App">
      <MySuspense />
    </div>
  );
}

export default App;
