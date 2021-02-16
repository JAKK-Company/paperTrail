import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import Login from './Login';
import CreateAccount from './CreateAccount';
import Dashboard from './Dashboard';

function App() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route 
            exact path="/" 
            render= {() => 
              <Login data={'test'}/>
            }
          />
          <Route 
            exact path="/Users/createAccount"  
            component = {CreateAccount} 
          />
          <Route 
            exact path= "/Dashboard"
            component= {Dashboard}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;