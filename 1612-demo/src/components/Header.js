import React from 'react';
import Button from 'antd/lib/button';

class Header extends React.Component{
  render(){
    return(
      <header>
        <Button icon="left" >返回</Button>
        <h3>newming@HOME</h3>
        <Button icon="right" >返回</Button>
      </header>
    )
  }
}

export default Header;
