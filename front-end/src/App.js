import './App.css';
import React from 'react';
import {Route,Switch, BrowserRouter as Router} from 'react-router-dom';
import {View} from "./View";
import {Create} from "./Create";

function App() {
  return (
      <Router>
        <Switch>
          <Route path="/" exact component={View}/>
          <Route path="/create" exact component={Create}/>
        </Switch>
      </Router>
  );
}

export default App;
