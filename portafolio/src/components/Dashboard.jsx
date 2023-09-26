import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";

function CondicionAtmosferica() {
  const apiUrl = "https://api.datos.gob.mx/v1/condiciones-atmosfericas?pageSize=800";
  const [datos, setDatos] = useState([]);
  const [estadoActual, setEstadoActual] = useState("");
  const [ciudadesDelEstado, setCiudadesDelEstado] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [estadosMx, setEstadosMx] = useState([]); 

  useEffect(() => {
    
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data.results)) {
          setDatos(data.results);
          setCargando(false);
        } else {
          console.error("Error: La API no devolvió un array 'results' válido.");
          setCargando(false);
        }
      })
      .catch((error) => {
        console.error("Error al consultar datos:", error);
        setCargando(false);
      });
  }, []);

  useEffect(() => {
   
    const estadosUnicos = [...new Set(datos.map((item) => item.state))];

    
    estadosUnicos.sort();

    setEstadosMx(estadosUnicos);
  }, [datos]);

  const handleEstadoChange = (e) => {
    const estadoSeleccionado = e.target.value;
    setEstadoActual(estadoSeleccionado);

    const ciudades = datos.filter((item) => item.state === estadoSeleccionado);

    setCiudadesDelEstado(ciudades);
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Selecciona un estado</h5>
              <select className="form-select" onChange={handleEstadoChange} value={estadoActual}>
                <option value="">Selecciona un estado</option>
                {estadosMx.map((estado, index) => (
                  <option key={index} value={estado}>
                    {estado}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className="col-md-9">
          <div className="card">
            <div className="card-body">
              {cargando ? (
                <p className="card-text">Cargando datos...</p>
              ) : estadoActual ? (
                <>
                  <h5 className="card-title">Estado seleccionado: {estadoActual}</h5>
                  <div>
                    {ciudadesDelEstado.length > 0 ? (
                      ciudadesDelEstado.map((ciudad, index) => (
                        <div key={index}>
                          <p>
                            Ciudad: {ciudad.name} - Condición climática:{" "}
                            {ciudad.skydescriptionlong}
                          </p>
                        </div>
                      ))
                    ) : (
                      <p>No hay datos disponibles para este estado.</p>
                    )}
                  </div>
                </>
              ) : (
                <p className="card-text">Selecciona un estado para ver el estado del tiempo.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CondicionAtmosferica;
