import React from 'react';
import Button from 'antd/lib/button';
import { withRouter } from 'react-router-dom'

class Header extends React.Component{
  render(){
    let pathname = this.props.location.pathname;
    return(
      <header>
        <Button icon="left" onClick={()=>this.props.history.goBack()}>返回</Button>
        <h3>newming@{pathname.slice(1).toUpperCase()}</h3>
        <Button icon="smile-o" shape="circle"></Button>
      </header>
    )
  }
}

export default withRouter(Header);
