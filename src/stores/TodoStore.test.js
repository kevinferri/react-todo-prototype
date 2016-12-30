import React from 'react';
import TodoStore from './TodoStore';
import _ from 'lodash';

describe('getAll()', () => {

  it('gets an array of all the todos', () => {
    const allTodos = TodoStore.getAll();

    expect(_.isArray(allTodos)).toEqual(true);
  });

  it('gets an array of all the todos with manditory id and text fields', () => {
    const allTodos = TodoStore.getAll();

    _.forEach(allTodos, function(todo) {
      expect(_.isUndefined(todo.id)).toEqual(false);
      expect(_.isUndefined(todo.text)).toEqual(false);
    });
  });

});

describe('createTodo()', () => {

  it('adds exactly one todo item', () => {
    const initialLen = TodoStore.getAll().length;
    const targetLen = initialLen + 1;

    TodoStore.createTodo({ text: 'test todo' });
    expect(TodoStore.getAll().length).toEqual(targetLen);
  });

});
