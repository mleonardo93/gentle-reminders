import React from 'react'
import Item from './Item'
import DateTime from 'react-datetime'

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      due: new Date(),
      newItemName: "",
      items: this.props.items
    }

  }

  handleChange(e) {
    this.setState({ newItemName: e.target.value })
  }

  handleDue(e) {
    this.setState({ due: e })
  }
  
  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.newItemName) { return };
    const newItem = { name: this.state.newItemName, due: this.state.due, user_id: this.props.currentUser.id, complete: false };
    fetch(`api/users/${this.props.currentUser.id}/items`, {
      method: 'POST',
      body: JSON.stringify(newItem),
      headers:{
        'Content-Type': 'application/json'
      }
    })
      .then(response => console.log('JSON posted successfully', JSON.stringify(response)))
    return fetch(`api/users/${this.props.currentUser.id}/items`)
      .then((resp) => resp.json())
      .then((resp) => this.setState({items: resp.data.items}))
  }

  toggleComplete(index) {
    const items = this.state.items.slice();
    const item = items[index];
    item.complete = item.complete ? false : true
    const updatedItem = { id: item.id, complete: item.complete }
    fetch(`api/users/${this.props.currentUser.id}/items/${item.id}`, {
      method: 'PUT',
      body: JSON.stringify(updatedItem),
      headers:{
        'Content-Type': 'application/json'
      }
    })
      .then(response => console.log('JSON put successfully', JSON.stringify(response)))
    return fetch(`api/users/${this.props.currentUser.id}/items`)
      .then((resp) => resp.json())
      .then((resp) => this.setState({items: resp.data.items}))
  }

  deleteItem(index) {
    const items = this.state.items.slice();
    const item = items[index];
    fetch(`api/users/${this.props.currentUser.id}/items/${item.id}`, {
      method: 'DELETE',
      headers:{
        'Content-Type': 'application/json'
      }
    })
      .then(response => console.log('JSON deleted successfully', JSON.stringify(response)))
    return fetch(`api/users/${this.props.currentUser.id}/items`)
      .then((resp) => resp.json())
      .then((resp) => this.setState({items: resp.data.items}))
  }

  render() {
    return (
      <div className="Dashboard">
        <p>{ this.props.currentUser.email }</p>
        <p>{ this.props.currentUser.username }</p>
        <ul>
          { this.state.items.map( (item, index) =>
            <Item key={ index } name={ item.name } due={ item.due } complete={ item.complete } toggleComplete={ () => this.toggleComplete(index) } deleteItem={ () => this.deleteItem(index) } /> 
          )}
        </ul>
        <form onSubmit={ (e) => this.handleSubmit(e) }>
          <p>New item name</p>
          <input type="text" value={ this.state.newItemName } onChange={ (e) => this.handleChange(e) } />
          <p>New item due time</p>
          <DateTime onChange={ (e) => this.handleDue(e) }/>
          <input type="submit" />
        </form>      
      </div>
    );
  }
}

export default Dashboard;