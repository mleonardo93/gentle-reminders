import React from 'react'

class Item extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li>
        <input type="checkbox" checked={ this.props.complete } onChange={ this.props.toggleComplete } />
        <p>{ this.props.name }</p>
        <p>{ this.props.due }</p>
      </li>
    );
  }
}

export default Item;