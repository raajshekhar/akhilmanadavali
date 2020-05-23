import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import history from './history';
import MainRoutes from './MainRoutes';
import Header from './containers/Header/Header';
import Footer from './components/Footer/Footer';
import './index.scss';
import * as serviceWorker from './serviceWorker';

const routing = (
  <Router history={history}>
    <header className="App-header">
      <Header />
    </header>
    <main> <MainRoutes /> </main>
    <Footer />
  </Router>
);


ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
