import React, {Component} from 'react';

class Results extends Component {
  render() {
    var percent = (this.props.score / this.props.questions.length * 100);

    if (percent > 80) {
      var message = "Awesome Job!";
    } else if (60 < percent < 80){
      var message = "You Did Ok!";
    } else {
      var message = "You Did Horrible!";
    }

    return(
      <div className="well">
        <h4>You got {this.props.score} out of {this.props.questions.length} correct </h4>
        <h2>{percent}% - {message}</h2>
        <hr />
        <a href="/app">Take Again</a>
      </div>
    )
  }
}

export default Results;
