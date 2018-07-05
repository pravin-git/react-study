import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../components/Home';
import About from '../components/About';
import Contact from '../components/Contact';
import Navigation from '../components/Navigation';
import ShowComponent from '../components/ShowComponent';

class LandingPage extends Component {
  render() {
    return (
          <BrowserRouter>
          <div>
            <Navigation/>
            <Switch>
              <Route path="/" component= { Home } exact />
              <Route path="/about" component= { About } />
              <Route path="/contact" component= { Contact } />
              <Route path="/show" component= { ShowComponent } />
              <Route component= { Contact } />
            </Switch>
            <Navigation/>
          </div>
        </BrowserRouter>
    ); 
  }
}

export default connect()(LandingPage);  