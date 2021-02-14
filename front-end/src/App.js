import './App.css';
import React from 'react';
import {Route,Switch, BrowserRouter as Router} from 'react-router-dom';
import {NavigationBar} from './components/NavigationBar';
import {View} from "./View";
import {Create} from "./Create";
import {Viewcard} from "./Viewcard";


/**
 * Returns the current path of the application via a Router & Switch
 */
function App() {
  return (
      <Router>
        {/*<NavigationBar />*/}
        <Switch>
          <Route path="/" exact component={View}/>
          <Route path="/create" exact component={Create}/>
          <Route path="/viewcard/:id" exact component={Viewcard}/>

        </Switch>
      </Router>
  );
}

export default App;
