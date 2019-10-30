import React from 'react';

const Forecasts = ({ forecasts }) => {
    const forecastList = forecasts.length ? (forecasts.map((forecast) => {
        return (
            <div className="card col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12" key={forecast.id}>
                <h5>Forecast for: {forecast.city}</h5>
                <p>Actual time: {forecast.date}</p>
                <p>Temperature: {forecast.temp} {'\u00b0'}C</p>
                <p>Pressure: {forecast.pressure} hPa</p>
                <p>Wind: {forecast.wind} m/s</p>
            </div>
        )
    })
    ) : (
            <p>Push the button and see the forecast! :-)</p>
        )

    return (
        <div className="row">
            {forecastList}
        </div>
    )
}

export default Forecasts;