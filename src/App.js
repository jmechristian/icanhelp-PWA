import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

import Org_Follow from './components/registration/Org_Follow';
import Set_Password from './components/registration/Set_Password';
import User_Info from './components/registration/User_Info';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Landing from './components/layout/Landing';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" component={Landing} />
          <div className="container">
            <Route exact path="/register" component={User_Info} />
            <Route exact path="/setPassword" component={Set_Password} />
            <Route exact path="/orgFollow" component={Org_Follow} />
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
