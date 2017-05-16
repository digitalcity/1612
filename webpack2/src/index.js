import React from 'react';
import ReactDOM from 'react-dom';
import img from './avater.jpg';

import './main.css';
import './main.less';

ReactDOM.render(
  <div className='box'>
    <p>hello11</p>
    <img src={img} />
  </div>
  ,document.getElementById('root'))
