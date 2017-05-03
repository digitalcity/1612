import React from 'react';

class MultipleForm extends React.Component{
  constructor(){
    super()
    this.state={
      text: '',
      textarea: '',
      checkbox: true
    }
  }
  handleSubmit(e){
    e.preventDefault();
    let obj = {
      text: this.state.text,
      textarea: this.state.textarea,
      checkbox: this.state.checkbox,
    }
    console.log(obj);
  }
  handleInput(e){
    let target = e.target;
    console.log(target.name);
    let value = (target.name==='checkbox' ? target.checked : target.value)
    this.setState({
      [target.name]: value
    })
  }
  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input value={this.state.text} name='text' onChange={this.handleInput.bind(this)} />

          <textarea value={this.state.textarea} name='textarea' onChange={this.handleInput.bind(this)} />

          <input type='checkbox' checked={this.state.checkbox} name='checkbox' onChange={this.handleInput.bind(this)}/>
          <button>提交</button>
        </form>
      </div>
    )
  }
}

export default MultipleForm;
