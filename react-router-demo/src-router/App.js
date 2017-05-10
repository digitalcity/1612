import React from 'react';
import { BrowserRouter as Router, Route, Link, Redirect, Switch, NavLink } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Work from './components/Work';

let New = () => <h1>我是新的页面，是old页面的改版</h1>;
let NotFound = () => <h1>我是404页面<Link to='/'>返回首页</Link></h1>;

class App extends React.Component{
  constructor(){
    super()
    this.state={
      admin: true
    }
  }
  render(){
    return(
      <Router>
        <div>
          <h1>欢迎光临</h1>

          <NavLink to='/' exact activeClassName="selected">首页</NavLink>
          <NavLink to='/about' activeClassName="selected">about页面</NavLink>
          <NavLink to='/work/dafdsaf' activeClassName="selected">work页面</NavLink>
          <NavLink to='/new' activeClassName="selected">new页面</NavLink>

          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' render={ props => this.state.admin ? <About {...props} /> : <Redirect to='/' /> } />
            <Route path='/work/:work' component={Work} />
            <Redirect from='/old' to='/new'/>
            <Route path='/new' component={New} />
            <Route path='/404' component={NotFound} />
            <Redirect from='*' to='/404' />
          </Switch>

          <p>版权所有</p>
        </div>
      </Router>
    )
  }
}

export default App;
