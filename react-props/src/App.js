import React from 'react';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      data: [
        {index: 1, title: '第一天', date: '2017.3.6'},
        {index: 2, title: 'hello world', date: '2017.3.6'},
        {index: 3, title: '爱迪生大', date: '2017.3.6'},
        {index: 4, title: '吃吃吃', date: '2017.3.6'},
        {index: 6, title: 'react and redux', date: '2017.3.6'}
      ],
      value: ''
    }
  }
  handleInput(){
    // console.log(this.input.value);
    this.setState({value: this.input.value})
  }
  render(){
    let newDate = this.state.value ?
      this.state.data.filter( item =>
        item.title.toLowerCase().includes(this.state.value.toLowerCase())
      )
      : this.state.data
    return(
      <div>
        <input onChange={this.handleInput.bind(this)} ref={input => this.input = input} />
        {
          newDate.map( item =>
            <div style={{marginBottom: '30px'}} key={item.index}>
              <span>{item.index}</span>
              <p>{item.title}</p>
              <p>{item.date}</p>
            </div>
          )
        }
      </div>
    )
  }
}

export default App;
