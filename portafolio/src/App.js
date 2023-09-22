import React  from 'react';
import './App.css';
import Dashboard from './components/Dashboard'; // Importa el componente Dashboard
import CondicionAdmosferica from './condicionAdmosferica';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Dashboard /> {/* Agrega el componente Dashboard aquí */}
        <CondicionAdmosferica/>

      </header>
    </div>
  );
}

export default App;
