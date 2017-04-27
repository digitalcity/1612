import React from 'react';

import img from './avater.jpg';

class Header extends React.Component{
  render(){
    return(
      <div>
        我是头部
        <img src={ img } alt='aaa' />
      </div>
    )
  }
}

export default Header;
