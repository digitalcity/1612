import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './Home'
import Topic from './Topic'

class App extends React.Component{
  render(){
    return(
      <BrowserRouter>
        <div>
          <h1>cnode 中文社区</h1>

          <Route exact path='/' component={Home} />
          <Route path='/topic/:id' component={Topic} />

          <h1>我是底部footer</h1>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
