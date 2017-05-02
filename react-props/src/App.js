import React from 'react';

// import Btn from './Btn';
import Card from './Card';
import CardArr from './CardArr';
import Child from './Child';

class App extends React.Component{
  constructor(){
    super();
    this.state={
      data: [
        {index: 1, title: 'first', date: '2017.4.30'},
        {index: 2, title: 'second', date: '2017.5.10'},
        {index: 3, title: 'third', date: '2017.5.20'},
        {index: 4, title: 'forth', date: '2017.5.30'}
      ],
      num: 0
    }
  }
  render(){
    return(
      <div>
        {/* <Btn title='123' pad={20} bg='blue'/> */}
        {/* <Card index={23} title='afdasf' date='2014.12.2'/> */}
        {/* {
          this.state.data.map( item =>
            <Card key={item.index} {...item} />
          )
        } */}

        {/* <CardArr data={this.state.data} /> */}

        {/* <Child>
          <img src='http://www.material-ui.com/images/ok-128.jpg' alt='aa' />
        </Child> */}


      </div>
    )
  }
}

export default App;
// props
