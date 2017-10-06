import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {getDonuts} from '../actions/getDonuts';
import Donut from './Donut';
import SelectedDonut from './SelectedDonut'



class Donuts extends Component {

  componentDidMount(){
    this.props.getDonutsAction();
  }





  render () {

    let theDonuts = this.props.getDonuts.map(donut => {
      return <Donut
        key={donut.id}
        donut={donut}
        />
    })

    return (
      <div className='row'>
        {theDonuts}
        {this.props.selectedDonut ? <SelectedDonut /> : ''}

      </div>
    )
  }
}

function mapStateToProps(state, props){
  return {
    getDonuts: state.getDonuts,
    selectedDonut: state.selectDonut
  }
}

function matchDispatchToProps(dispatch){
  return {
    getDonutsAction: bindActionCreators(getDonuts, dispatch)
  }
}


export default connect(mapStateToProps, matchDispatchToProps)(Donuts);
