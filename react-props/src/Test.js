import React from 'react';

class Test extends React.Component{
  // constructor(){
  //   super()
  //   console.log('test constructor');
  // }
  // componentWillMount(){
  //   console.log('test will mount');
  // }
  // componentDidMount(){
  //   console.log('test did mount');
  // }
  componentWillReceiveProps(nextProps){
    console.log('test====== will receive props',nextProps);
  }
  componentWillUnmount(){
    console.log('test ====== will unmount');
  }
  render(){
    return(
      <div>
        test下的num:{this.props.num}
      </div>
    )
  }
}

export default Test;
