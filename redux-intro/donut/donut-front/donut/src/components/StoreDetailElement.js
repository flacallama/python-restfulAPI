import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectStore } from '../actions/selectStore';



class StoreDetailElement extends Component {

  render () {

    return (
      <div>
        <p><a>{this.props.store.name}</a></p>
      </div>
    )
  }
}

// function mapStateToProps(state, props) {
//   return {
//     selectedStore: state.selectStore
//   }
// }
//
// function matchDispatchToProps(dispatch) {
//   return{
//     selectStoreAction: bindActionCreators(selectStore, dispatch)
//   }
// }
//
// export default connect(mapStateToProps, matchDispatchToProps)(StoreDetailElement);
export default StoreDetailElement;
