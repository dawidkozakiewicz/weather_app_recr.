import React, { Component } from 'react';
import Weather from './weather';
import './app.scss';
import './index.scss';
import picture from './images/winter-icons.gif';

class App extends Component {

  state = {
    weathers: [],
    renderedWeathers: []
  }

  componentDidMount() {
    console.log('żądanie wysłane');
    this.setState({
      weathers: []
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
          let weathers = [...this.state.weathers, weather]
          weathers = weathers.sort(function (a, b) {
            return a.city.localeCompare(b.city);
          })
          this.setState({
            weathers,
            renderedWeathers: weathers
          })
        })
        .catch(err => {
          console.log(err)
          this.setState({
            weathers: []
          })
        })
    })
  }


  handleTrimToOne = (e) => {
    e.preventDefault()
    let weathers = [...this.state.weathers]
    let renderedWeathers = weathers.slice(0, 1)
    this.setState({
      renderedWeathers
    })
  }

  handleTrimToFour = (e) => {
    e.preventDefault()
    let weathers = [...this.state.weathers]
    let renderedWeathers = weathers.slice(0, 4)
    this.setState({
      renderedWeathers
    })
  }

  handleTrimToNine = (e) => {
    e.preventDefault()
    let weathers = [...this.state.weathers]
    let renderedWeathers = weathers.slice(0, 9)
    this.setState({
      renderedWeathers
    })
  }


  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-8">
              <header className="center">
                <div><h1 >Meteo Service</h1>
                  <h4>Actual weather for nine biggest polish cities!</h4>
                </div>

              </header>
            </div>
            <div className="col-lg-4 col-md-4">
              <img src={picture} alt="picture" />
            </div>
          </div>
        </div>
        <div className="container container-span">
          <span>
            Results on page:
        <button onClick={this.handleTrimToOne}>1</button>
            <button onClick={this.handleTrimToFour}>4</button>
            <button onClick={this.handleTrimToNine}>9</button>
          </span>
        </div>
        <div className="container">
          <Weather weathers={this.state.renderedWeathers} />
        </div>
      </div>
    );
  }
}


export default App;
