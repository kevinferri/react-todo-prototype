import { EventEmitter } from 'events';

class TodoStore extends EventEmitter {
  constructor() {
    super();
    // In a real scenario this will fetch from a db
    this.todos = [
      {
        id: 1,
        text: 'Todo1'
      },
      {
        id: 2,
        text: 'Todo2'
      },
      {
        id: 3,
        text: 'Todo3'
      }
    ];
  }

  getAll() {
    return this.todos;
  }

  createTodo(text) {
    this.todos.push({
      id: Date.now(),
      text: text
    });

    this.emit('change');
  }
}

export default new TodoStore();
