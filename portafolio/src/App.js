import React from 'react';
import './App.css';
import Dashboard from './components/Dashboard'; // Importa el componente Dashboard

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Dashboard /> {/* Agrega el componente Dashboard aquí */}
      </header>
    </div>
  );
}

export default App;
