import React, { Component } from 'react';
import Todos from './Todos';


class App extends Component {

  state = {
    todos: []
  }

  handleCitySubmit = (e) => {

    e.preventDefault();
    console.log('żądanie wysłane');
    this.setState({
      todos: []
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
          let todos = [...this.state.todos, weather]
          this.setState({
            todos: todos
          })

          console.log(this.state)
        })
        .catch(err => {
          console.log(err)
          this.setState({
            todos: []
          })
        })
    })



  }


  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">METEO-SERVICE</h1>
        <button className="waves-effect waves-light btn" onClick={this.handleCitySubmit}>Weather
        </button>
        <p>Results on page:</p>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <Todos todos={this.state.todos} />

      </div>
    );
  }
}

export default App;
