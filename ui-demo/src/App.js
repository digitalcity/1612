import React from 'react';

import { Form, Icon, Input, Button, Checkbox } from 'antd';
const FormItem = Form.Item;

import img from './avater.jpg';

class App extends React.Component{
  componentDidMount(){

  }
  render(){
    console.log(this.props.form);
    return(
      <div>
        aaa
        <img src={img}/>
      </div>
    )
  }
}

export default Form.create()(App);
