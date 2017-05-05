import React from 'react';

class Work extends React.Component{
  render(){
    console.log(this.props);
    return(
      <div>
        work 组件<br />

        {this.props.match.params.work}
      </div>
    )
  }
}

export default Work;
