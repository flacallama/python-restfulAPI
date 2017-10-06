import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { getShopsDonuts } from '../actions/getShopsDonuts';
import { selectDonut } from '../actions/selectDonut';

class Donut extends Component {

  componentDidMount() {
    this.props.getShopsDonutsAction();
  }

  render () {
    let donut = this.props.donut

    //
    // let matchingStores = this.props.getShopsDonuts
    //   .filter(store => {
    //     if(store.donut_id === donut.id) {
    //       return true;
    //     } else {
    //       return false
    //     }
    //   })





    return (
      <div className="inline" onClick={e => this.props.selectDonutAction(donut.id)}>
        <div className="selectorCards ">
          <div className="card ">
            <div className="card-image waves-effect waves-block waves-light donutPicSm">
              <img className="activator responsive-img " src={donut.picUrl} alt="blah"/>
            </div>
            <div className="card-content card-wrap-around-name">
              <a className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">add</i></a>
              <div className="card-title activator grey-text text-darken-4 text-hide-me">
                {donut.name}
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
    selectDonutAction: bindActionCreators(selectDonut, dispatch)
  }
}

export default connect(mapStateToProps, matchDispatchToProps)(Donut);

//
//
// <div className="inline ">
//   <div className=" ">
//     <div className="card white   selectorCards">
//       <div
//         className="card-content"
//       >
//         <div
//           className=""
//           onClick={e => this.props.selectDonutAction(donut.id)}
//         >
//           <div className="card-image">
//             <img className="" src={donut.picUrl} alt="blah" />
//             <a className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">add</i></a>
//
//             <p className="black-text">{donut.name}</p>
//         </div>
//         </div>
//       </div>
//     </div>
//   </div>
//
// </div>
//
// <div className="row camera">
// <div className="col s12 m6">
// <div className="card white darken-1">
// <div className="card-content black-text">
// <h4 className="card-title black-text">{camera.title}</h4>
// <img src={camera.image} alt="blah" className="cameraImage"/>
// <h5>${(camera.price).toFixed(2)} {onSale()}</h5>
// <h5>{starMaker(camera.rating)}</h5>
// <a
// onClick={(e) => this.props.actions.addItemToCart(camera.id)}
// className="waves-effect waves-light btn"
// >button</a>
// </div>
// </div>
// </div>
// </div>
