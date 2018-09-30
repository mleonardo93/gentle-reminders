import React from 'react';
import '../styles/Splash.css';

class Splash extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      login: false
    }
  }

  handleLogin = () => {
    this.setState({login: true});
  }

  handleSignUp = () => {
    this.setState({login: false})
  }

  render() {
    return(
      <div>
        <div className="Header">
          <h1>Gentle Reminders</h1>
          <h2>A kinder to-do app</h2>
        </div>
        <span className="Body">
          <ul>
            <li><h3>Encouraging messages!</h3></li>
            <li><h3>Stop avoiding reminders!</h3></li>
            <li><h3>Get tasks done!</h3></li>
          </ul>
        </span>
      </div>
    );
  }
}
export default Splash
