import React, { Component } from 'react';
import TodoCollection from '../TodoCollection/TodoCollection'
import TodoCreator from '../TodoCreator/TodoCreator'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Todo List</h1>
        <TodoCreator />
        <TodoCollection />
      </div>
    );
  }
}

export default App;
