import React, { Component } from 'react';

class Dashboard extends Component {
  state = {
    selectedState: '', // Estado seleccionado
    weatherData: null, // Datos del estado del tiempo
  };

  // Función para manejar cambios en la selección del estado
  handleStateChange = (event) => {
    this.setState({ selectedState: event.target.value });
    // Aquí puedes hacer una solicitud a la API del estado del tiempo en función del estado seleccionado
    // y actualizar los datos en this.state.weatherData
  };

  // Función para mostrar los datos del estado del tiempo
  renderWeatherData() {
    const { weatherData } = this.state;

    if (!weatherData) {
      return <p>Selecciona un estado para ver el tiempo.</p>;
    }

    // Aquí muestra los datos del estado del tiempo (puedes personalizar esto)
    return (
      <div>
        <h2>Estado: {this.state.selectedState}</h2>
        <p>Temperatura: {weatherData.temperature}</p>
        <p>Clima: {weatherData.weather}</p>
        {/* Agrega más detalles según los datos de la API */}
      </div>
    );
  }

  render() {
    return (
      <div>
        <h1>Estado del Tiempo</h1>
        <div>
          <label>Selecciona un estado:</label>
          <select onChange={this.handleStateChange}>
            <option value="">-- Selecciona un estado --</option>
            {/* Aquí puedes agregar opciones para los estados */}
            <option value="Ciudad de México">Ciudad de México</option>
            <option value="Guadalajara">Guadalajara</option>
            {/* Agrega más estados aquí */}
          </select>
        </div>
        {this.renderWeatherData()}
      </div>
    );
  }
}

export default Dashboard;
