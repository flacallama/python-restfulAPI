import React, { Component } from 'react';
import Stores from './Stores';
import Header from './Header';
class MainStore extends Component {

  render () {
    return (
      <div>
      <Header />
        <Stores />
      </div>
    )
  }
}
export default MainStore;
