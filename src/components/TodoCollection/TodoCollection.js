import React, { Component } from 'react';
import Todo from '../Todo/Todo';
import TodoStore from '../../stores/TodoStore';
import './TodoCollection.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      todos: TodoStore.getAll()
    }
  }

  componentWillMount() {
    TodoStore.on('change', () => {
      this.setState({
        todos: TodoStore.getAll()
      });
    });
  }

  render() {
    return (
      <div className="TodoCollection">
        {
          this.state.todos.map((item, i) => {
            return <Todo key={i} text={item.text} id={item.id} />
          })
        }
      </div>
    );
  }
}

export default App;
