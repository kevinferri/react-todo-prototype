import React, { Component } from 'react';
import './Todo.css';

class App extends Component {
  render() {
    return (
      <div className="Todo">
        <p><strong>Text: </strong>{this.props.text}</p>
        <p><strong>Added By: </strong>{this.props.addedBy}</p>
      </div>
    );
  }
}

export default App;
