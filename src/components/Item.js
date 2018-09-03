import React from 'react'

class Item extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li>
        <span>{ this.props.name }</span>
      </li>
    );
  }
}

export default Item;