import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from './components/Login';

const App = (props) => {
  return (
    <Switch>
      <Route path='/' exact component={Login}/>
    </Switch>
  )
}

export default App;
