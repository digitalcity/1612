import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Home from './Home'
import Topic from './Topic'
import Header from './Header'
import User from './User'

class App extends React.Component{
  render(){
    return(
      <BrowserRouter>
        <Route render={ props => (
          <div>
            <Header />

            <ReactCSSTransitionGroup
              transitionName="example"
              transitionEnterTimeout={500}
              transitionLeaveTimeout={300}>
              <div className={props.location.key} key={props.location.key}>
                <Route exact path='/' component={Home} />
                <Route path='/topic/:id' component={Topic} />
                <Route path='/user/:loginname' component={User} />
              </div>
            </ReactCSSTransitionGroup>

            <h1>我是底部footer</h1>
          </div>
        )} />

      </BrowserRouter>
    )
  }
}

export default App;
