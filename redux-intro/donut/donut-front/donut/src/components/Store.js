import React, { Component } from 'react';
class Store extends Component {

  render () {
    let store = this.props.store
    return (
      <div>{store.name}</div>
    )
  }
}
export default Store;
