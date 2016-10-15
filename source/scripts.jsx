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
  submit: function(){
    return(
      $.get("https://weatherly-api.herokuapp.com/api/weather", function(){
        alert('this workś')
      })
    )
  }

});

ReactDOM.render(<Main />, document.getElementById('application'));
