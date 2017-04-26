import React from 'react';

import img from './avater.jpg';

class Header extends React.Component{
  render(){
    return(
      <div>
        我是头部
        <img src={ img } />
        <img src='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1493205585178&di=2975de979a294dcfcaa3aca82ad84148&imgtype=0&src=http%3A%2F%2Fandroid-wallpapers.25pp.com%2Ffs01%2F2014%2F10%2F05%2F2000_bc2bea0062ea49ef800a22fdbdeb2ff0_900x675.jpg' />
      </div>
    )
  }
}

export default Header;
