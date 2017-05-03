import React from 'react';

class Form extends React.Component{
  constructor(){
    super();
    this.state = {
      input: '',
      textarea: '',
      select: 'lime',
      radio: 'girl',
      checkbox: true
    }
  }
  handleSubmit(e){
    e.preventDefault()
    console.log(this.state.input, this.input.value);
    console.log('aaaa');
  }
  handleChange(e){
    console.log(e.target.value);
    this.setState({input: e.target.value})
  }
  textarea(e){
    this.setState({textarea: e.target.value})
  }
  handleSelect(e){
    console.log(e.target.value);
    this.setState({select: e.target.value})
  }
  handleRadio(e){
    console.log(e.target.value);
    this.setState({radio: e.target.value})
  }
  handleCheckbox(e){
    console.log(e.target.checked);
    this.setState({checkbox: e.target.checked})
  }
  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input placeholder='name' value={this.state.input} onChange={this.handleChange.bind(this)}/>
          <input placeholder='name' ref={input => this.input=input}/>

          <textarea value={this.state.textarea} onChange={this.textarea.bind(this)} rows="8" cols="80"/>
          <textarea rows="8" cols="80"/>

          <select value={this.state.select} onChange={this.handleSelect.bind(this)}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
          </select>
          <select>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
          </select>
          <br />

          男
          <input name="goodRadio" type="radio" value='boy' onChange={this.handleRadio.bind(this)}/>
          女
          <input name="goodRadio" defaultChecked type="radio" value='girl' onChange={this.handleRadio.bind(this)}/>

          <br />
          同意
          <input type='checkbox' checked={this.state.checkbox} onChange={this.handleCheckbox.bind(this)}/>

          <button>提交</button>
        </form>
      </div>
    )
  }
}

export default Form;
