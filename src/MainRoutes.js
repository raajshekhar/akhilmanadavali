import React, { Component } from 'react';
import {
    Switch,
    Route
  } from "react-router-dom";
import App from './App';
import Service from './containers/Service/Service';
import CreateService from './components/CreateService/CreateServiceForm';
import CreateCategory from './components/CreateCategory/CreateCategoryForm';
import CreateCategoryItem from './components/CreateCategoryItem/CreateCategoryItem';
import ServiceManDetails from './components/ServiceManDetails/ServiceManDetails';

import NoMatch from './components/NoMatch/NoMatch';

  class MainRoutes extends Component {
      render() {
          return (
              <Switch>
                  <Route exact path="/" component={App}></Route>
                  <Route exact path="/service/:name" component={Service}></Route>
                  <Route exact path="/createService" component={CreateService}></Route>
                  <Route exact path="/CreateCategory" component={CreateCategory}></Route>
                  <Route exact path="/CreateCategoryItem" component={CreateCategoryItem}></Route>
                  <Route exact path="/ServiceManDetails" component={ServiceManDetails}></Route>
                  <Route path="*"><NoMatch /></Route>
              </Switch>
          )
      }
  }

  export default MainRoutes;