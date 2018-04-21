import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import './index.css';

import App from './App';
import store from './redux/store';
import registerServiceWorker from './registerServiceWorker';

const Index = () => (
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
)

ReactDOM.render(<Index />, document.getElementById('root'));
registerServiceWorker();
