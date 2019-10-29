import React from 'react';

const Todos = ({ todos }) => {

    const todoList = todos.length ? (todos.map((todo) => {
        return (
            <div className="collection-item" key={todo.id}>
                <h5>Forecast for: {todo.city}</h5>
                <p>Actual time: {todo.date}</p>
                <p>Temperature: {todo.temp} {'\u00b0'}C</p>
                <p>Pressure: {todo.pressure} hPa</p>
                <p>Wind: {todo.wind} m/s</p>
            </div>
        )
    })
    ) : (
            <p className="center" >Push the button and see the forecast! :-)</p>
        )

    return (
        <div className="todos collection">
            {todoList}
        </div>
    )
}

export default Todos;