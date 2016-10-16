var React = require('react');
var ReactDOM = require('react-dom');

var SubmitButton = React.createClass({
  render: function(){
    return(
      <div>
        <button className="submitButton" onClick={(e) => this.submit(e)}>Submit</button>
      </div>
    )
  },
});

module.exports = SubmitButton;
