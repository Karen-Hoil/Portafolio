import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import CondicionAtmosferica from './components/Dashboard';

function App() {
  return (
    <div className="App bg-light text-center py-5">
      <h1 className="text-danger">EL CLIMA EN TUS MANOS</h1>
      <CondicionAtmosferica />
      <h4 className="text-danger">@GUSTAVO-Gutierrez</h4>
    </div>
  );
}

export default App;
