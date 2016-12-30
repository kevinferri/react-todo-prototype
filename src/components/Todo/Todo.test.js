import React from 'react';
import ReactDOM from 'react-dom';
import Todo from './Todo';

it('renders without throwing an error', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Todo />, div);
});
