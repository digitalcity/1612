import React from 'react';
import axios from 'axios';
import Card from 'antd/lib/card';
import Spin from 'antd/lib/spin';
import {Link} from 'react-router-dom';

class Blog extends React.Component{
  constructor(){
    super()
    this.state={
      data: [],
      wait: true
    }
  }
  componentDidMount(){
    axios.get('https://raw.githubusercontent.com/newming/demodata/master/duopingshidai.json')
      .then( res => this.setState({data: res.data, wait: false}) )
      .catch( err => alert(err) )
  }
  render(){
    return(
      <div style={{padding: '10px'}}>
        {
          this.state.wait ? <div style={{textAlign: 'center',paddingTop: '50px'}}><Spin size="large" /></div> :
            this.state.data.map( item =>(
              <Card key={item.index} title={item.title} extra={<Link to={`/post/${item.url}`}>阅读更多</Link>} style={{marginBottom: '10px'}}>
                <p>{item.desc}</p>
              </Card>
            ))
        }
      </div>
    )
  }
}

export default Blog;
