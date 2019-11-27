import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CssEducator from './CssEducator';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<CssEducator />, document.getElementById('root'));

serviceWorker.unregister();
