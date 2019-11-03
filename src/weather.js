import React from 'react';
import './card.scss'
const Weathers = ({ weathers }) => {
    const weatherList = weathers.length ? (weathers.map((weather) => {
        return (
            <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 card" key={weather.id}>
                <h3>Weather for: {weather.city}</h3>
                <p><i class="far fa-clock"></i> Actual time: {weather.date} </p>
                <p>Temperature: {weather.temp} {'\u00b0'}C <i class="fas fa-thermometer-half"></i></p>
                <p>Pressure: {weather.pressure} hPa </p>
                <p>Wind: {weather.wind} m/s <i class="fas fa-wind"></i></p>
            </div>
        )
    })
    ) : (
            <span><h3>We are sorry, the service is temporarily unavailable :-(</h3></span>

        )

    return (
        <div className="row">
            {weatherList}
        </div>
    )
}

export default Weathers;