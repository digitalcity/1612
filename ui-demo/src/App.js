import React from 'react';

import { Form, Icon, Input, Button, Checkbox } from 'antd';
const FormItem = Form.Item;

class App extends React.Component{
  componentDidMount(){

  }
  render(){
    console.log(this.props.form);
    return(
      <div>

      </div>
    )
  }
}

export default Form.create()(App);
