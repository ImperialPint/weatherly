var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');


var SubmitButton = React.createClass({
  render: function(){
    return(
      <div>
        <button className="submit-button" onClick={(e) => this.setLocation(e)}>Submit</button>
      </div>
    )
  },
  setLocation: function(e){
    return(
      $.get(this.props.source + this.state.location, function(){
        console.log(this.props.source + this.state.location);
      })
    )
  }
});

module.exports = SubmitButton;
