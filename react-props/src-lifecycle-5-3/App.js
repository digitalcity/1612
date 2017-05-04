import React from 'react';

import Test from './Test';

class App extends React.Component{
  constructor(){
    super()
    console.log('constructor');
    this.state = {
      num: 0,
      destroy: false
    }
  }
  // componentDidMount(){
  //   console.log('did mount');
  // }
  // componentWillMount(){
  //   console.log('will mount');
  // }
  shouldComponentUpdate(nextProps, nextState){
    console.log('should update');
    return nextState.num < 10 ? true : false
  }
  // componentWillUpdate(nextProps, nextState){
  //   console.log('will update');
  //   console.log(nextProps, nextState);
  // }
  // componentDidUpdate(prevProps, prevState){
  //   console.log('did update');
  //   console.log(prevProps,prevState);
  // }
  render(){
    console.log('render');
    return(
      <div>
        {this.state.num}<br />
        <button onClick={() => this.setState({num: this.state.num+1}) }>+1</button>
        <button onClick={() => console.log(this.state)}>show state</button>

        <button onClick={()=> this.setState({destroy: true})}>销毁test组件</button>
        {this.state.destroy ? null : <Test num={this.state.num}/>}

      </div>
    )
  }
}

export default App;

// 一： 初始化，首次挂载
/*
  constructor
  componentWillMount
  render
  componentDidMount
*/

// 二： 更新阶段(state,props发生变化时)
/*
  componentWillReceiveProps(nextProps) -> 父级传入的props发生变化，而且必须是父级的state控制的props发生变化
  shouldComponentUpdate(nextProps,nextState) -> 必须返回一个布尔值
  componentWillUpdate(nextProps,nextState)
  render
  componentDidUpdate(prevProps,prevState)
*/

// 三： 销毁
// componentWillUnmount()
