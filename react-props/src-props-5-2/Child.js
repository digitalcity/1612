import React from 'react';

class Child extends React.Component{
  render(){
    console.log(this.props);
    return(
      <div style={{boxShadow: 'rgba(0, 0, 0, 0.2) 0px 10px 18px', borderRadius: '50%'}}>
        {this.props.children}
      </div>
    )
  }
}

export default Child;
