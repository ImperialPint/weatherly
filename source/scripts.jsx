var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');

var Main = React.createClass({
  render: function(){
    return(
      <div>
        <input placeholder="Location"/>
        <button>Submit</button>
      </div>
    )
  }
});

var Submit = React.createClass({
  redner: function(){
    return(
      $.get
    )
  }
})

ReactDOM.render(<Main />, document.getElementById('application'));
