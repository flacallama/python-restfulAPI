import React, { Component } from 'react';
import { connect } from 'react-redux';
import SelectedDonutDetails from './SelectedDonutDetails'



class SelectedDonut extends Component {

  render () {
    let selectedDonutDetails = this.props.getDonuts.filter(donut => {
      if (donut.id === this.props.selectedDonut){
        return donut
      }
    })


    return (
      <div>
        {selectedDonutDetails[0] ? <SelectedDonutDetails detail={selectedDonutDetails[0]} /> : ''}


      </div>

    )
  }
}

function  mapStateToProps(state, props) {
  return {
    selectedDonut: state.selectDonut,
    getDonuts: state.getDonuts,
  }
}

export default connect(mapStateToProps, null)(SelectedDonut);
