import React from 'react';
import {NavLink} from 'react-router-dom';

import Icon from 'antd/lib/icon';

class Footer extends React.Component{
  render(){
    return(
      <footer>
        <NavLink exact activeStyle={{color: '#F44336'}} to='/'><Icon type="apple" /><br />Home</NavLink>
        <NavLink activeStyle={{color: '#F44336'}} to='/blog'><Icon type="apple" /><br />Blog</NavLink>
        <NavLink activeStyle={{color: '#F44336'}} to='/work'><Icon type="apple" /><br />Work</NavLink>
        <NavLink activeStyle={{color: '#F44336'}} to='/about'><Icon type="apple" /><br />About</NavLink>
      </footer>
    )
  }
}

export default Footer;
