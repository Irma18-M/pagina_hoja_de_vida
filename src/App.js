import React from 'react';
import Header from './components/Header';
import Education from './components/Education';
import Experience from './components/Experience';
import './App.css';  // Asegúrate de que este archivo esté en la ubicación correcta

function App() {
  return (
    <div className="App">
      <Header />
      <Education />
      <Experience />
    </div>
  );
}

export default App;
