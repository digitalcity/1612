import React from 'react';
import {HashRouter, Route} from 'react-router-dom';

import Header from './components/Header';
import LeftNav from './components/LeftNav';
import Footer from './components/Footer';

import Home from './components/Home';
import Blog from './components/Blog';
import Work from './components/Work';
import About from './components/About';
import Post from './components/Post';

class App extends React.Component{
  constructor(){
    super();
    this.state={
      mobile: true
    }
  }
  setNav(){
    document.body.clientWidth>700?this.setState({mobile: false}) : this.setState({mobile: true})
  }
  componentWillMount(){
    this.setNav()
    window.onresize = () => { this.setNav() }
  }
  render(){
    return(
      <HashRouter>
        <div className='my-wrap'>
          { this.state.mobile? <Header /> : <LeftNav /> }

          <div className='main'>
            <Route exact path='/' component={Home}/>
            <Route path='/blog' component={Blog}/>
            <Route path='/work' component={Work}/>
            <Route path='/about' component={About}/>
            <Route path='/post/:title' component={Post}/>
          </div>

          {this.state.mobile? <Footer /> : null}
        </div>
      </HashRouter>
    )
  }
}

export default App;
