import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

// 3f77acb1-d753-4393-b784-44913190e6a8
class User extends React.Component{
  constructor(){
    super()
    this.state={
      user: {},
      wait: true
    }
  }
  componentWillReceiveProps(nextProps){
    axios.get(`https://cnodejs.org/api/v1/user/${nextProps.match.params.loginname}`)
      .then( res => this.setState({user: res.data.data,wait: false}) )
      .catch( err => alert(err) )
  }
  componentWillMount(){
    axios.get(`https://cnodejs.org/api/v1/user/${this.props.match.params.loginname}`)
      .then( res => this.setState({user: res.data.data,wait: false}) )
      .catch( err => alert(err) )
  }
  render(){
    console.log(this.state.user);
    let {user,wait} = this.state;
    return(
      <div>
        {
          wait? <h1>数据加载中，请稍等。。。</h1> :
          <div>
            <img src={user.avatar_url} alt='avatar'/>
            <h1>{user.loginname}</h1>
            <p>积分： {user.score}</p>
            <h2>发过的文章：</h2>
            {
              user.recent_topics.map( item=>
                <p key={item.id}><Link to={`/topic/${item.id}`} >{item.title}</Link></p>
              )
            }
            <h2>回复过的文章：</h2>
            {
              user.recent_replies.map( item=>
                <div key={item.id}>
                  <Link to={`/topic/${item.id}`}>{item.title}</Link>
                  <Link style={{float: 'right'}} to={`/user/${item.author.loginname}`}>{item.author.loginname}</Link>
                </div>
              )
            }
          </div>
        }
      </div>
    )
  }
}

export default User;
