import React from 'react';
import ReactDOM from 'react-dom';

import App from './App'
// import TodoList from './Todolist.js'
import './main.css';

import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');

ReactDOM.render(<App />, document.getElementById('root'))
