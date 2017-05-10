import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './Home'
import Topic from './Topic'
import Header from './Header'
import User from './User'

class App extends React.Component{
  render(){
    return(
      <BrowserRouter>
        <div>
          <Header />

          <Route exact path='/' component={Home} />
          <Route path='/topic/:id' component={Topic} />
          <Route path='/user/:loginname' component={User} />

          <h1>我是底部footer</h1>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
