import React,{Component} from 'react';

class App extends Component {
  constructor(){
    super();
    this.state = {
      num: 0,
      tab: 0,
      show: true
    }
  }
  handleClick(num){
    this.setState({
      num: this.state.num + num,
      show: !this.state.show
    })
  }
  handleTab(tab){
    this.setState({tab})
  }
  render(){
    let box1 = <div>
      <h1>dfafdfds</h1>
    </div>;
    let styles = {
      width: '100px',
      height: this.state.show ? '100px' : '0px',
      background: '#00bcd4',
      transition: 'height .7s',
      marginTop: '10px'
    }
    let styles1 = {
      color: 'pink',
      marginTop: '50px'
    }
    return(
      <div className='app'>
        <p>数量是：{this.state.num}</p>
        <button onClick={this.handleClick.bind(this,1)}>+1</button>
        <button onClick={this.handleClick.bind(this,-1)}>-1</button>
        <br />
        <button onClick={this.handleTab.bind(this,0)}>选项卡1</button>
        <button onClick={this.handleTab.bind(this,1)}>选项卡2</button>
        <button onClick={this.handleTab.bind(this,2)}>选项卡3</button>
        <br />
        {
          this.state.tab===0 ? box1 :
          this.state.tab===1 ? '我是选项卡二' : '我是选项卡三'
        }
        <h1 style={{...styles,...styles1, fontSize: '16px'}}>afdsaf</h1>
        <div style={styles} className={this.state.show ? 'active' : ''}></div>
      </div>
    )
  }
}

export default App;
