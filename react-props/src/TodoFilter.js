import React from 'react';

class TodoFilter extends React.Component{
  render(){
    let btns = ['ALL', 'ACTIVE', 'COMPLETED'];
    return(
      <div>
        分类：
        {
          btns.map( (item,index) =>
            <button key={index} onClick={()=> this.props.select(item)} className={`btn ${this.props.filter===item? 'btn-primary' : 'btn-default'}`}>{item}</button>
          )
        }
      </div>
    )
  }
}

export default TodoFilter;
