import React from 'react';

import bg from './avater.jpg'

class Footer extends React.Component {
  render(){
    let styles = {
      common: {
        fontSize: '32px',
        color: 'blue'
      },
      spec: {
        textAlign: 'center',
        color: 'red'
      }
    }
    return(
      <div style={{backgroundImage: `url(${bg})`}}>
        我是尾部
        <h1 style={styles.common}>我是H1普通</h1>
        <h1 style={styles.common}>我是H1普通</h1>
        <h1 style={Object.assign({}, styles.common, styles.spec)}>我是H1特殊</h1>
      </div>
    )
  }
}

export default Footer;
