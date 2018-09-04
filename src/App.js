import React, { Component } from 'react';
import Dashboard from './components/Dashboard';
import Item from './components/Item';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: {},
      items: []
    }
  }
  componentDidMount() {
    fetch("api/users")
      .then((resp) => resp.json())
      .then((resp) => this.setState({currentUser: resp.data.user} ) ) 
    fetch(`api/users/${this.state.currentUser.id}/items`)
      .then((resp) => resp.json())
      .then((resp) => this.setState({items: resp.data.items}))
  }
  render() {
    return <Router>
      <Switch>
        <Route 
          path="/"  
          component={() => <Dashboard currentUser={this.state.currentUser} items={this.state.items} /> }
        />
      </Switch>
    </Router>
  }
}

export default App;
