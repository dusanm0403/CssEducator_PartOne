import React from 'react';
import ReactDOM from 'react-dom';
import CssEducator from './CssEducator';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CssEducator />, div);
  ReactDOM.unmountComponentAtNode(div);
});
