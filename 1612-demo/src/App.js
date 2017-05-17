import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './components/Home';
import Blog from './components/Blog';
import Work from './components/Work';
import About from './components/About';
import Post from './components/Post';

class App extends React.Component{
  render(){
    return(
      <BrowserRouter>
        <div className='my-wrap'>
          <Header />

          <div className='main'>
            <Route exact path='/' component={Home}/>
            <Route path='/blog' component={Blog}/>
            <Route path='/work' component={Work}/>
            <Route path='/about' component={About}/>
            <Route path='/post/:title' component={Post}/>
          </div>

          <Footer />
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
