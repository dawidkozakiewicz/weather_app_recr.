import React, { Component } from 'react';
import Forecasts from './Forecasts';

class App extends Component {

  state = {
    forecasts: [],
    newForecasts: []
  }

  componentDidMount() {
    console.log('żądanie wysłane');
    this.setState({
      forecasts: []
    })
    const cities = ['Warszawa', 'Kraków', 'Łódź', 'Wrocław', 'Poznań', 'Gdańsk', 'Szczecin', 'Bydgoszcz', 'Lublin']
    cities.forEach((city, index) => {
      const API = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=84aea1ab45e8d501835d9128346165db&units=metric`
      fetch(API)
        .then((response) => {
          if (response.ok) {
            return response;
          }
          throw Error('Nie udało się');
        })
        .then((response) => response.json())
        .then((data) => {
          const time = new Date().toLocaleString()
          const weather = {
            id: index,
            err: false,
            date: time,
            city: data.name,
            sunrise: data.sys.sunrise,
            sunset: data.sys.sunset,
            temp: data.main.temp,
            pressure: data.main.pressure,
            wind: data.wind.speed
          }
          let forecasts = [...this.state.forecasts, weather]
          this.setState({
            forecasts,
            newForecasts: forecasts
          })

          console.log(this.state)
        })
        .catch(err => {
          console.log(err)
          this.setState({
            forecasts: []
          })
        })
    })
  }


  handleTrimToOne = (e) => {
    e.preventDefault()
    let forecasts = [...this.state.forecasts]
    let newForecasts = forecasts.slice(0, 1)
    this.setState({
      newForecasts
    })
  }

  handleTrimToFour = (e) => {
    e.preventDefault()
    let forecasts = [...this.state.forecasts]
    let newForecasts = forecasts.slice(0, 4)
    this.setState({
      newForecasts
    })
  }

  handleTrimToNine = (e) => {
    e.preventDefault()
    let forecasts = [...this.state.forecasts]
    let newForecasts = forecasts.slice(0, 9)
    this.setState({
      newForecasts
    })
  }


  render() {
    return (
      <div>

        <div className="jumbotron container">
          <h1>Meteo Service</h1>
          <h4>Forecast for nine biggest polish cities!</h4>
        </div>

        <div className="container">
          <span>
            Results on page:
        <button className="ml-1 btn btn-info" onClick={this.handleTrimToOne}>1</button>
            <button className="ml-1 btn btn-info" onClick={this.handleTrimToFour}>4</button>
            <button className="ml-1 btn btn-info" onClick={this.handleTrimToNine}>9</button>
          </span>
        </div>
        <div className="container mt-2">
          <Forecasts forecasts={this.state.newForecasts} />
        </div>
      </div>
    );
  }
}


export default App;
