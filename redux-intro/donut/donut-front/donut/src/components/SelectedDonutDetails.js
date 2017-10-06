import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { getShopsDonuts } from '../actions/getShopsDonuts';
import StoreDetail from './StoreDetail';

class SelectedDonutDetails extends Component {

  componentDidMount() {
    this.props.getShopsDonutsAction();
  }

  render () {

    let detail = this.props.detail

    return (

        <div className="col sm12 m12">
          <div className="card white darken-1 center">
            <div
              className="black-text"
            >
              <div className="row">
                <div className="inline">
                  <h3>{detail.name}</h3>
                  <p>Topping: {detail.topping}</p>
                  <p>Only: ${(detail.price).toFixed(2)}</p>

                  <p>Available at:</p>
                  <StoreDetail />
                </div>
                <div className="inline">
                  <img className="donutPic" src={detail.picUrl} alt="blah" />
                </div>
              </div>
            </div>
          </div>
        </div>

    )
  }
}






function mapStateToProps(state, props){
  return {
    getShopsDonuts: state.getShopsDonuts

  }
}

function matchDispatchToProps(dispatch){
  return {
    getShopsDonutsAction: bindActionCreators(getShopsDonuts, dispatch),

  }
}

export default connect(mapStateToProps, matchDispatchToProps)(SelectedDonutDetails);
