import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Login from "./Login";
import CreateAccount from "./CreateAccount";

function App() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route 
            exact path="/" 
            render={() => 
              <Login data={"test"}/>
              }
          />
          <Route 
            exact path="/Users/createAccount"  
            component = {CreateAccount} 
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;