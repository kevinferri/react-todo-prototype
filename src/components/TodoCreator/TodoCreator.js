import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TodoStore from '../../stores/TodoStore';
import './TodoCreator.css';

class App extends Component {

  createTodo(event) {
    TodoStore.createTodo(this.refs.createTodo.value);
    ReactDOM.findDOMNode(this.refs.createTodo).value = '';
  }

  handleKeyDown(event) {
    if (event.keyCode === 13) {
      this.createTodo();
    }
  }

  render() {
    return (
      <div className="TodoCreator">
        <input onKeyDown={this.handleKeyDown.bind(this)} type="text" placeholder="Add a todo" ref="createTodo" />
        <button onClick={this.createTodo.bind(this)}>Create</button>
      </div>
    );
  }
}

export default App;
