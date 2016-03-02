var React = require('react');


var Staging = React.createClass({
  render: function(){
    var submitSize = function () {
      var size = parseInt(document.getElementById("input-size").value);
      this.gameActions.submitSize("")
    }

    return (
      <h1>How large would you like tic tac toe to be?<h2>
      <textarea id="input-size" placeholder="3,4,5,etc...">{this.game.valid}<textarea>
      <button className="submit-button" onClick={submitSize}>Start!</button>
    )
  }
});

module.exports = Staging;
