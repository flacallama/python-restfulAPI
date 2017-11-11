import React, { Component } from 'react';
class DateBox extends Component {

  state = {
    selected: false
  }


  onClick = () => {
    // console.log('clickedddd', this.state)
    this.setState({
      selected: !this.state.selected
    })

    this.props.selectDate(this.props.index)


  }



// (e) => this.props.selectDate(index, e)

  render () {
    let elem = this.props.element
    let index = this.props.index
    let selected = this.state.selected

    return (

        <div className={selected ? "dateBox green" : "dateBox"} onClick={this.onClick}>{elem.substring(5, 10)}</div>

    )
  }
}
export default DateBox;
