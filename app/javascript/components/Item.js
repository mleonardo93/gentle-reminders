import React from 'react'
import '../styles/Item.css'
import moment from 'moment'

class Item extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li className="Item">
        <input
            type="checkbox"
            checked={ this.props.complete}
            onChange={ this.props.toggleComplete }
            className="Done"
          />
        <label className="Name">{ this.props.name }</label>
        <p>{ this.props.due ? moment(this.props.due).format('LLL') : "" }</p>
        <button value={this.index} onClick={ this.props.deleteItem }>Delete</button>
      </li>
    );
  }
}

export default Item;
