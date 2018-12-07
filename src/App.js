import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import {  Route,Redirect } from 'react-router-dom';
import './App.css';
import routes from './routes'
import Header from './Components/Shared/Header';
import Footer from './Components/Shared/Footer';

class App extends Component {
  render() {
    return (
      <Router>
        
        <div>
        <Redirect from="/" to="/ghibli" />
          <Header />
          {routes.map(route => (
            <Route exact path={route.path} component={route.component} />
          ))}
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
