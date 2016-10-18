var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');

var Main = React.createClass({
  getInitialState: function(){
    return {
      location: '',
      weather: []
    }
  },
  getWeatherLocation: function(response){
    var thisState = this.state.location.toLowerCase();
    var spacelessLocation = thisState.replace(" ", '-');
    var apiURL = 'https://weatherly-api.herokuapp.com/api/weather/' + spacelessLocation

    $.get(apiURL, function(response){
      this.setState({weather: response})
    }.bind(this))
  },
  render: function(){
    let weather = this.state.weather;
    let weatherArray = [];
    for(var i = 0; i < weather.length; i++){
      if (i < weather.length) {
        weatherArray.push(
          <div className="daily-weather" key={i}>
            <h3>{weather[i].date}</h3>
            <br />
            <div className={weather[i].weatherType.type}></div>
            <div className="change deets">{Math.floor(weather[i].weatherType.chance * 100)}%</div>
            <div className="temp-high deets">High: {weather[i].temp.high}°F</div>
            <div className="temp-low deets">Low: {weather[i].temp.low}°F</div>
            <br />
            <br />
          </div>
        )
      }
    }

    
    return(
      <div className="entire-page">
        <div className="header">
        <h1 className = "welcome">Welcome To Weatherly</h1>
          <input className="user-location" placeholder="Location" onChange={(e) => this.setState({location: e.target.value})}/>
          <button className="submit-button" type="submit" onClick={(e) => this.getWeatherLocation(e)}>Submit</button>
        </div>
        <div className="weather">
          <ul className="weather-append">
            <h3>{weatherArray}</h3>
          </ul>
        </div>
      </div>
    )
  }
});

ReactDOM.render(<Main source='https://weatherly-api.herokuapp.com/api/weather/'/>, document.getElementById('application'));
