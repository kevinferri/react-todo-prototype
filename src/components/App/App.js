import React, { Component } from 'react';
import TodoCollection from '../TodoCollection/TodoCollection'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Todo List</h1>
        <TodoCollection />
      </div>
    );
  }
}

export default App;
