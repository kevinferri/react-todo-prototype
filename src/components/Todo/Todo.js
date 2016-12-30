import React, { Component } from 'react';
import './Todo.css';

class App extends Component {
  render() {
    return (
      <div className="Todo">
        <p><strong>id: </strong>{this.props.id}</p>
        <p><strong>text: </strong>{this.props.text}</p>
      </div>
    );
  }
}

export default App;
