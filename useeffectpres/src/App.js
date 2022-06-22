import React from 'react';
import Morty from './Morty';
import Rick from './Rick';
import './App.css';

function App() {
  return (
    <div className='flexing '>
      <Morty />
      <Rick />
    </div>
  );
}

export default App;
