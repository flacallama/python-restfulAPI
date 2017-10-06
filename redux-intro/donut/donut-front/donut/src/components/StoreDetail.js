import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import StoreDetailElement from './StoreDetailElement';
import { getShopsDonuts } from '../actions/getShopsDonuts';

class StoreDetail extends Component {

  componentDidMount() {
    this.props.getShopsDonutsAction();
  }

  render () {

    let donut = this.props.selectedDonut
    console.log('donut',donut)
    let matchingStores = this.props.getShopsDonuts
      .filter(store => {
        if(store.donut_id === donut) {
          console.log(store)
          return true;
        } else {
          return false
        }
      })
      .map(store => {
        return <StoreDetailElement store={store} />
      })

    return (
      <div className="row">
        {matchingStores}
      </div>
    )
  }
}

function mapStateToProps(state, props){
  return {
    getShopsDonuts: state.getShopsDonuts,
    selectedDonut: state.selectDonut
  }
}

function matchDispatchToProps(dispatch){
  return {
    getShopsDonutsAction: bindActionCreators(getShopsDonuts, dispatch)
  }
}

export default connect(mapStateToProps, matchDispatchToProps)(StoreDetail);
