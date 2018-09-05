import React from 'react'

class Item extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li>
        <p>{ this.props.name }</p>
        <p>{ this.props.due }</p>
      </li>
    );
  }
}

export default Item;