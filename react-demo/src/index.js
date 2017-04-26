import React from 'react';
import ReactDOM from 'react-dom';

import Header from './Header.js';
import Footer from './Footer.js';
import Main from './Main.js';

// let Hello = React.createClass({
//   render: function () {
//     return (
//       <div id='6666'>
//         <h1>我是第一种组件的创建方式，即将废弃</h1>
//       </div>
//     )
//   }
// })

// function World() {
//   let sex = true;
//   return(
//     <div>
//       <h1>{ sex ? '男' : '女' }</h1>
//     </div>
//   )
// }
//
// let Hello = function () {
//   return(
//     <div>
//       <h1>我是第二中组件的创建方式，必须有返回值，而且返回值必须是JSX elements</h1>
//       <World></World>
//     </div>
//   )
// }


ReactDOM.render(
<div>
  <Header/>
  <Main/>
  <Footer/>
</div>, document.querySelector('#root'))


// JSX 语法
// JSX语法需要babel进行编译，转为这个方法 React.createElement()；
// Adjacent JSX elements must be wrapped in an enclosing tag 相邻的JSX元素必须包裹在一个闭合标签内
// 每一个标签必须闭合Unterminated JSX contents
// class => className; for => htmlFor;
// 标签区分大小写
// 在JSX语法中可以嵌入变量或者求值表达式，可以写js语法,用一对大括号包裹即可，不可以写js语句

// React组件(3)，当做自定义标签去用，首字母必须大写
// 1 React.createClass()
// 2 function(){}
// 3. class
