import React from 'react';
import SignUp from './SignUp';
import Login from './Login';
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
        <div className="Body">
          <h3>
            <button onClick={this.handleSignUp}>Sign up</button>
            or
            <button onClick={this.handleLogin}>log in</button>
          </h3>
          { this.state.login == false &&
            <SignUp />
          }
          { this.state.login == true &&
            <Login />
          }
        </div>
      </div>
    );
  }
}
export default Splash
