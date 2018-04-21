import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from './components/Login';
import Profile from './components/Profile';
import Nav from './components/Nav';

const App = (props) => {
  return (
    <React.Fragment>
      <Nav />
      <Switch>
        <Route path='/' exact component={Login}/>
        <Route path='/profile' exact component={Profile} />
      </Switch>
    </React.Fragment>
  )
}

export default App;
