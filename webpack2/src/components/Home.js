import React from 'react';
import Button from 'antd/lib/button';

class Home extends React.Component{
  render(){
    return(
      <div className='home-wrap'>
        <div >
          <h1>HI,I'M NEWMING</h1>
          <p>a front-end developer</p>
          <Button type='primary'><a href='https://github.com/newming'>HIRE ME</a></Button>
        </div>
      </div>
    )
  }
}

export default Home;
