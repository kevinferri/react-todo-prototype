import React from 'react';
import ReactDOM from 'react-dom';
import TodoCreator from './TodoCreator';

it('renders without throwing an error', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TodoCreator />, div);
});
