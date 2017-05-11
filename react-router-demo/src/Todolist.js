import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {items: ['hello', 'world', 'click', 'me']};
    this.handleAdd = this.handleAdd.bind(this);
  }
  handleAdd() {
    let newItem = prompt('Enter some text')
    this.setState({items: [...this.state.items,newItem]});
  }
  handleRemove(i) {
    let newItems = this.state.items.slice();
    newItems.splice(i, 1);
    this.setState({items: newItems});
  }
  render() {
    const items = this.state.items.map((item, i) => (
      <div key={item} onClick={() => this.handleRemove(i)}>
        {item}
      </div>
    ));
    return (
      <div>
        <button onClick={this.handleAdd}>Add Item</button>
        <ReactCSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={5000}
          transitionLeaveTimeout={3000}>
          {items}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}
