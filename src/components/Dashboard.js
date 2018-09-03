import React from 'react'
import Item from './Item'

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Dashboard">
        <p>{ this.props.currentUser.email }</p>
        <p>{ this.props.currentUser.username }</p>
        <ul>
          { this.props.items.map( (item, index) =>
            <Item key={ index } name={ item.name } /> 
          )}
        </ul>
      </div>
    );
  }
}

export default Dashboard;