import React, { Component } from 'react';
import Todo from '../Todo/Todo';
import './TodoCollection.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoCollection: [
        {
          text: 'Todo1',
          addedBy: 'Kevin'
        },
        {
          text: 'Todo2',
          addedBy: 'Kevin'
        },
        {
          text: 'Todo3',
          addedBy: 'Kevin'
        }
      ]
    }
  }

  render() {
    return (
      <div className="TodoCollection">
        {
          this.state.todoCollection.map((item, i) => {
            return <Todo key={i} text={item.text} addedBy={item.addedBy} />
          })
        }
      </div>
    );
  }
}

export default App;
