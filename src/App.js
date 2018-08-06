import React, { Component }from 'react'
import Titles from './components/Titles'
import Form from './components/Form'
import Weather from './components/Weather'

const API_KEY = process.env.REACT_APP_USER_TOKEN

class App extends Component {
    state = {
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        pressure: undefined,
        icon: undefined,
        wind: undefined,
        error: undefined
    }

    getWeather = async (e) => {
        e.preventDefault()
        const city = e.target.elements.city.value
        const country = e.target.elements.country.value
        const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}&units=metric`)
        const data = await api_call.json()


        if (data.cod == 404) {
            this.setState({
                temperature: undefined,
                city: undefined,
                country: undefined,
                humidity: undefined,
                description: undefined,
                pressure: undefined,
                icon: undefined,
                wind: undefined,
                error: "Please make sure your inputs are valid."
            })
        } else if(city && country){
            this.setState({
                temperature: data.main.temp,
                city: data.name,
                country: data.sys.country,
                humidity: data.main.humidity,
                pressure: data.main.pressure,
                description: data.weather[0].description,
                icon: data.weather[0].icon,
                wind: data.wind.speed,
                error: ''
            })
        } else {
            this.setState({
                error: 'Please enter the value.'
            })
        }
    }

    render(){
        return (
            <div>
                <div className="wrapper">
                    <div className="main">
                        <div className="container">
                            <div className="row">
                                <div className="col-xs-5 col-lg-5 title-container">
                                    <Titles/>
                                </div>
                                <div className="col-xs-7 col-lg-7 form-container">
                                    <Form getWeather = {this.getWeather} />
                                    <Weather
                                        temperature = {this.state.temperature}
                                        city = {this.state.city}
                                        country = {this.state.country}
                                        humidity = {this.state.humidity}
                                        description = {this.state.description}
                                        icon={this.state.icon}
                                        pressure = {this.state.pressure}
                                        wind = {this.state.wind}
                                        error = {this.state.error}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}



export default App