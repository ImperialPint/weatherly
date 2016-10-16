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
  render: function(){
    return(
      <div>
        <input className="user-location" placeholder="Location" onChange={(e) => this.setState({location: e.target.value})}/>
        <button className="submit-button" type="submit" onClick={(e) => this.getWeatherLocation(e)}>Submit</button>
      </div>
    )
  },
  // submit: function(e){
  //   return(
  //     $.get(this.props.source + this.state.location, function(){
  //       console.log(this.props.source + this.state.location);
  //     }.bind(this))
  //   )
  // },
  getWeatherLocation: function(response){
    var thisState = this.state.location.toLowerCase();
    var spacelessLocation = thisState.replace(" ", '-');
    var apiURL = 'https://weatherly-api.herokuapp.com/api/weather/' + spacelessLocation

    $.get(apiURL, function(response){
      this.setState({weather: response})
    }.bind(this))
  }
});

// var weatherDisplay = React.createClass({
// render: function(){
//     return(
//       <div className="weatherComp">
//         <ul>
//           <li></li>
//           <li></li>
//           <li></li>
//           <li></li>
//         </ul>
//       </div>
//     )
//   }
// });

ReactDOM.render(<Main source='https://weatherly-api.herokuapp.com/api/weather/'/>, document.getElementById('application'));
