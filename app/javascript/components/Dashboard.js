import React from 'react'
import Item from './Item'
import DateTime from 'react-datetime'
import '../styles/Dashboard.scss'
import '../../../node_modules/react-datetime/css/react-datetime.css'


class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      due: null,
      newItemName: "",
      items: this.props.items,
    }
  }

  handleChange(e) {
    this.setState({ newItemName: e.target.value });
  }

  handleDue(e) {
    console.log("handleDue called");
    this.setState({ due: e });
  }

  handleSubmit(e) {
    e.preventDefault();

    if (!this.state.newItemName) { return };

    const newItem = {
      name: this.state.newItemName,
      due: this.state.due,
      user_id: this.props.currentUser.id,
      complete: false
    };

    fetch(`api/users/${this.props.currentUser.id}/items`, {
      method: 'POST',
      body: JSON.stringify(newItem),
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(() => {
      this.updateItems();
    });

    this.setState({ newItemName: "" });
  }

  toggleComplete(index) {
    const items = this.state.items.slice();
    const item = items[index];
    item.complete = !item.complete;
    const updatedItem = { id: item.id, complete: item.complete }
    fetch(`api/users/${this.props.currentUser.id}/items/${item.id}`, {
      method: 'PUT',
      body: JSON.stringify(updatedItem),
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(() => this.updateItems());
  }

  deleteItem(index) {
    const items = this.state.items.slice();
    const item = items[index];
    fetch(`api/users/${this.props.currentUser.id}/items/${item.id}`, {
      method: 'DELETE',
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(() => this.updateItems());

  }

  updateItems() {
    fetch(`api/users/${this.props.currentUser.id}/items`)
      .then((resp) => resp.json())
      .then((resp) => this.setState({items: resp.data.items}));
  }

  render() {
    return (
      <div className="Dashboard">
        <div className="Header">
          <h1>{this.props.currentUser.username}'s to-dos</h1>
        </div>
        <ul> 
          <li>
            <span className="Form">
              <form onSubmit={ (e) => this.handleSubmit(e) }>
                <label>New item name</label>
                <input
                  type="text"
                  value={ this.state.newItemName }
                  onChange={ (e) => this.handleChange(e) }
                  className="Field"
                />
                <label>New item due time</label>
                <DateTime 
                  onChange={ (e) => this.handleDue(e) }
                  className="Field"
                />
                <input type="submit" value="New item" />
              </form>
            </span>
          </li>
          <li>
            <span className="List">
              <ul>
                { this.state.items.map( (item, index) =>
                  <Item key={ index }
                    name={ item.name }
                    due={ item.due }
                    complete={ item.complete }
                    toggleComplete={ () => this.toggleComplete(index) }
                    deleteItem={ () => this.deleteItem(index) }
                  />
                )}
              </ul>
            </span>
          </li>
        </ul>
      </div>
    );
  }
}

export default Dashboard;
