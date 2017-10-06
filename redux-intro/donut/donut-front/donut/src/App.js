import React, { Component } from 'react';
import MainDonut from './components/MainDonut';
import MainStore from './components/MainStore';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import './App.css';

class App extends Component {
  render() {
    return (

      <Router>
        <div className=''>

          <Route exact path="/" component={MainDonut}/>
          <Route path="/stores" component={MainStore}/>

        </div>
      </Router>



    );
  }
}

export default App;
