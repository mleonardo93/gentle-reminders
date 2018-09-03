import React from 'react'

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Dashboard">
        <p>{ this.props.currentUser.email }</p>
        <p>{ this.props.currentUser.username }</p>
      </div>
    );
  }
}

export default Dashboard;