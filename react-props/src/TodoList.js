import React from 'react';

class TodoList extends React.Component{
  handleChecked(id){
    // console.log(i);
    this.props.completed(id)
  }
  render(){
    // console.log(this.props);
    return(
      <ul style={{listStyle: 'none',padding: '0'}}>
        {
          this.props.data.map( item =>
            <li key={item.id}>
              <input type='checkbox' className='pull-left' checked={item.completed} onChange={this.handleChecked.bind(this,item.id)}/>

              <span style={{textDecoration: item.completed ? 'line-through' : 'none'}}>{item.text}</span>

              <span className="glyphicon glyphicon-remove-circle pull-right" aria-hidden="true" onClick={()=>this.props.remove(item.id)}></span>
            </li>
          )
        }
      </ul>
    )
  }
}

export default TodoList;
