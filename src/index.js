import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import './index.css';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

const Index = () => (
  <Router>
    <App />
  </Router>
)

ReactDOM.render(<Index />, document.getElementById('root'));
registerServiceWorker();
