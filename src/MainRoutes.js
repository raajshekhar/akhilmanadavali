import React, { Component } from 'react';
import {
    Switch,
    Route
  } from "react-router-dom";
import App from './App';
import Service from './containers/Service/Service';
import NoMatch from './components/NoMatch/NoMatch';

  class MainRoutes extends Component {
      render() {
          return (
              <Switch>
                  <Route exact path="/" component={App}></Route>
                  <Route exact path="/service/:name" component={Service}></Route>
                  <Route path="*"><NoMatch /></Route>
              </Switch>
          )
      }
  }

  export default MainRoutes;