var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');

var Main = React.createClass({
  render: function(){
    return(
      <div>
        <input placeholder="Location" onChange={(e) => this.setState({location: e.target.value})}/>
        <button type="submit" onClick={(e) => this.submit(e)}>Submit</button>
      </div>
    )
  },
  submit: function(e){
    e.preventDefault();
    return(
      $.get(this.props.source + this.state.location, function(){
        alert(this.props.source + this.state.location);
      }.bind(this))
    )
  }
});

ReactDOM.render(<Main source='https://weatherly-api.herokuapp.com/api/weather/'/>, document.getElementById('application'));
