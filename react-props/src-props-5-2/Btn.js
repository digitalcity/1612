import React from 'react';
import PropTypes from 'prop-types';

class Btn extends React.Component{
  render(){
    // console.log(this.props);
    let styles = {
      border: 'none',
      padding: `${this.props.pad}px`,
      background: this.props.bg,
      color: '#fff',
      fontSize: '24px'
    }
    return(
      <button style={styles}>
        {this.props.title}
      </button>
    )
  }
}

Btn.defaultProps = {
  title: '我是默认的标题',
  pad: 60,
  bg: '#000'
}

Btn.propTypes = {
  title: PropTypes.string,
  pad: PropTypes.number
}
export default Btn
