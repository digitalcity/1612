import React from 'react';

import Test from './Test';

class Home extends React.Component{
  // componentDidMount(){
  //   alert('3秒后了会跳转到about页面')
  //   setTimeout( ()=>{
  //     this.props.history.push('/about')
  //   },3000)
  // }
  handleClick(){
    this.props.history.goBack()
  }
  render(){
    // console.log('home====',this.props);
    return(
      <div>
        Home
        <button onClick={this.handleClick.bind(this)}>返回</button>

        <Test />
      </div>
    )
  }
}

export default Home;
