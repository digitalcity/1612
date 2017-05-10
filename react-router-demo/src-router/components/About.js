import React from 'react';
import { Route, Link } from 'react-router-dom';

const Dijia = () => <h1>我是第嘉的介绍</h1>
const Niu = () => <h1>我是钮的介绍</h1>
const Zhang = () => <h1>我是张的介绍</h1>

class About extends React.Component{
  render(){
    let {match} = this.props
    console.log(match);
    return(
      <div>
        About页面<br />
        <Link to={`${match.url}`} >关于第嘉</Link>
        <Link to={`${match.url}/niu`} >关于钮老师</Link>
        <Link to={`${match.url}/zhang`} >关于张老师</Link>

        <Route exact path={`${match.url}`} component={Dijia}/>
        <Route path={`${match.url}/niu`} component={Niu}/>
        <Route path={`${match.url}/zhang`} component={Zhang}/>
      </div>
    )
  }
}

export default About;
