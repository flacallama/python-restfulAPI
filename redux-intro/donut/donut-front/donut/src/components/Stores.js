import React, { Component } from 'react';
import Store from './Store';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getStores } from '../actions/getStores';


class Stores extends Component {

  componentDidMount(){
    this.props.getStoresAction();
  }
  render () {
    let theStores = this.props.getStores.map(store => {
      return <Store key={store.id} store={store} />
    })
    return (
      <div>{theStores}</div>
    )
  }
}

function mapStateToProps(state, props) {
  return {
    getStores: state.getStores
  }
}

function matchDispatchToProps(dispatch){
  return {
    getStoresAction: bindActionCreators(getStores, dispatch)
  }
}

export default connect(mapStateToProps, matchDispatchToProps)(Stores);
