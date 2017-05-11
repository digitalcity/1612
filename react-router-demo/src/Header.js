import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Header extends React.Component{
  constructor(){
    super()
    this.state={
      login: false,
      user: {}
    }
  }
  login(){
    let token = this.input.value;
    // console.log(token);
    axios.post('https://cnodejs.org/api/v1/accesstoken', {accesstoken: token})
      .then( res => this.setState({user: res.data, login: true}) )
      .catch( err => alert(err) )
  }
  render(){
    return(
      <div style={{overflow: 'hidden'}}>
        <h1 style={{float: 'left',margin: '0'}}><Link to='/'>cnode 中文社区</Link></h1>
        {
          this.state.login ? <p style={{float: 'right'}}>欢迎您：<Link to={`/user/${this.state.user.loginname}`}>{this.state.user.loginname}</Link></p> :
          <div style={{float: 'right'}}>
            <input ref={ input => this.input=input }/>
            <button onClick={this.login.bind(this)}>登录</button>
          </div>
        }
      </div>
    )
  }
}

export default Header;
