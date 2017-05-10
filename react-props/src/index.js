import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';

ReactDOM.render(<App />, document.getElementById('root'))

// class App extends React.Component{
//   constructor() {
//     super();
//     this.state = {
//       data:[
//         {name: 'aaa', value: 123, selected: false},
//         {name: 'bbb', value: 123, selected: false},
//         {name: 'cc', value: 123, selected: false},
//         {name: 'dddd', value: 123, selected: false}
//       ]
//     }
//   }
//   handleChange(i){
//     let newData = this.state.data;
//     newData[i].selected = !newData[i].selected
//     this.setState({data: newData})
//   }
//   submit(){
//     let selected = this.state.data.filter( item=> item.selected )
//     selected.forEach( item =>delete item.selected)
//     console.log(selected);
//   }
//   render(){
//     return(
//       <div>
//         {
//           this.state.data.map( (item,index)=>
//             <div key={index}>
//               <input type='checkbox' checked={item.selected} onChange={this.handleChange.bind(this,index)}/>
//               <span>{item.name} </span>
//               <span> {item.value}</span>
//             </div>
//           )
//         }
//         <button onClick={this.submit.bind(this)}>提交</button>
//       </div>
//     )
//   }
// }
