import React from 'react';

class Events extends React.Component{
  handleWheel(e){
    console.dir(e.deltaY);
  }
  render(){
    return(
      <div onWheel={this.handleWheel.bind(this)} style={{height: '200px',background: 'blue'}}>

      </div>
    )
  }
}

export default Events;
