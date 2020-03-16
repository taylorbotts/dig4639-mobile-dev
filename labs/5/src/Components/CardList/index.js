import React from 'react'
import WeatherCard from '../WeatherCard/index.js'

class CardList extends React.Component {
  
  constructor (props) {
    super(props)

    this.state = {
      periods: []
    }
  }

  componentDidMount() {

    fetch('https://api.weather.gov/gridpoints/MLB/25,69/forecast')
      .then(res => res.json())
      .then((result) => {
        this.setState({
          periods: result.properties.periods
        })
      })

  }
  
  render () {
    return (
      <>
        {this.state.periods
          .map((v) => <WeatherCard key={v.number}
            name={v.name}
            temperature={v.temperature}
            temperatureUnit={v.temperatureUnit}
            detailedForecast={v.detailedForecast}
          />)}
      </>
    )
  }
}

export default CardList