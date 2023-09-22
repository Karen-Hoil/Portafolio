import React, {useState, useEffect} from 'react'

function CondicionAdmosferica() {
    const url = "https://api.datos.gob.mx/v1/condiciones-atmosfericas";
    const estadosMx = [
        {"id":1, "name":"Aguascalientes"},
        {"id": 2, "name": "Baja California"},
        {"id": 19, "name": "Nuevo León"},
        {"id": 20, "name": "Oxaca"},
        {"id": 21, "name": "Puebla"}, 
        {"id": 31, "name": "Yucatan"}, 
        {"id": 32, "name": "Zacatecas"}];
    const [datos, setDatos] = useState([]);
    const [estadoActual, setEstadoActual] = useState("Quintana Roo");
    const consultarDatos = () => {
        return fetch(url)
        .then((res) => res.json())
        .then((condicionAtm) => setDatos(condicionAtm.results))
    }

    useEffect(() => {
        consultarDatos();
    }, []);
  return (
    <>
        <select on onChange={(e) => setEstadoActual(e.target.value)}>
            <option value="">Selecciona una opción</option>
            {estadosMx.map((opcion) => (<option key={opcion.id} value={opcion.name}>
                {opcion.name}
            </option>))}
        </select>

        {estadoActual}
        <h1>Estado del Tiempo</h1>
        {datos.map((ciudad, index) =>{
            return(
                <div>
                    <p>{ciudad.name} - <i>{ciudad.skydescriotionlong}</i></p>
                </div>
            );
        })}
    </>
  );
}

export default CondicionAdmosferica
