import React from 'react'

const Weather = props => (
    <div className="weather__info">
        { props.city && props.country && <p className="weather__key">
            Location: <span className="weather__value">{props.city}, {props.country}</span></p> }
        { props.temperature && <p className="weather__key">
            Temperature: <span className="weather__value">{props.temperature}</span></p> }
        { props.humidity && <p className="weather__key">
            Humidity: <span className="weather__value">{props.humidity}%</span></p> }
        { props.pressure && <p className="weather__key">
            Pressure: <span className="weather__value">{props.pressure} hPa</span></p> }
        { props.wind && <p className="weather__key">
            Wind: <span className="weather__value">{props.wind} meter/sec</span> </p> }
        { props.sunrise && <p className="weather__key">
            Sunrise: <span className="weather__value">{props.sunrise} </span></p> }
        { props.sunset && <p className="weather__key">
            Sunset: <span className="weather__value">{props.sunset}</span></p> }
        { props.description && <p className="weather__key">
            Conditions: <span className="weather__value">{props.description}</span>
            <img src={`http://openweathermap.org/img/w/${props.icon}.png`} id="condition-image"/> </p>}
        { props.error && <p className="weather__error">
            Error: {props.error}</p> }
    </div>
)

export default Weather