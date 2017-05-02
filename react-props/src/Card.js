import React from 'react';

class Card extends React.Component {
  render(){
    let styles = {
      root: {
        height: '80px'
      },
      index: {
        width: '80px',
        height: '80px',
        lineHeight: '80px',
        float: 'left',
        textAlign: 'center',
        background: 'blue',
        color: '#fff',
        fontSize: '24px'
      }
    }
    console.log(this.props);
    return(
      <div style={styles.root}>
        <div style={styles.index}>{this.props.index}</div>
        <div>
          <h3>{this.props.title}</h3>
          <p>{this.props.date}</p>
        </div>
      </div>
    )
  }
}

Card.defaultProps = {
  index: 0,
  title: '默认标题',
  date: '2017.4.30'
}

export default Card
