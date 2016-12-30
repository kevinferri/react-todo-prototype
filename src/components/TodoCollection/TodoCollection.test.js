import React from 'react';
import ReactDOM from 'react-dom';
import TodoCollection from './TodoCollection';

it('renders without throwing an error', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TodoCollection />, div);
});
