import React from 'react';
import './card.css'
const Weathers = ({ weathers }) => {
    const weatherList = weathers.length ? (weathers.map((weather) => {
        return (
            <div className="col card" key={weather.id}>
                <h3>Weather for: {weather.city}</h3>
                <p>Actual time: {weather.date}</p>
                <p>Temperature: {weather.temp} {'\u00b0'}C</p>
                <p>Pressure: {weather.pressure} hPa</p>
                <p>Wind: {weather.wind} m/s</p>
            </div>
        )
    })
    ) : (
            <p>Push the button and see the weather! :-)</p>
        )

    return (
        <div className="row">
            {weatherList}
        </div>
    )
}

export default Weathers;