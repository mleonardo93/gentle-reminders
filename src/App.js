import React, { Component } from 'react';
import Dashboard from './components/Dashboard';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: {}
    }
  }
  componentDidMount() {
    fetch("api/users")
      .then((resp) => resp.json())
      .then((resp) => this.setState({currentUser: resp.data.user})) 

  }
  render() {
    return <Router>
      <Switch>
        <Route 
          path="/"  
          component={() => <Dashboard currentUser={this.state.currentUser} /> }
        />
      </Switch>
    </Router>
  }
}

export default App;
