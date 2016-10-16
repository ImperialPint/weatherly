var React = require('react');
var ReactDOM = require('react-dom');

var InputLocation = React.createClass({
  this.location = '',
  render: function(){
    return(
      <div>
        <input className="location-input" placeholder="Location" onChange={(e) => this.setState({location: e.target.value})}/>
      </div>
    )
  },
});

module.exports = InputLocation;
