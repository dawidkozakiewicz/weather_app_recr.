import React from 'react';
import './todos.css'

const Forecasts = ({ todos }) => {
    console.log('a kukku!')

    const forecastList = todos.length ? (todos.map((todo) => {
        return (
            <div key={todo.id}>
                <h5>Forecast for: {todo.city}</h5>
                <p>Actual time: {todo.date}</p>
                <p>Temperature: {todo.temp} {'\u00b0'}C</p>
                <p>Pressure: {todo.pressure} hPa</p>
                <p>Wind: {todo.wind} m/s</p>
            </div>
        )
    })
    ) : (
            <p>Push the button and see the forecast! :-)</p>
        )

    return (
        <div>
            {forecastList}
        </div>
    )
}

export default Forecasts;