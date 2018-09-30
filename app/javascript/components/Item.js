import React from 'react'
import Notification from 'react-web-notification'
import moment from 'moment'
import '../styles/Item.css'

class Item extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ignore: true,
      title: "",
      notified: false
    }

    this.sendNotification = this.sendNotification.bind(this);
  }

  componentDidMount(){
    if(this.props.due && !this.props.complete) {
      const timeDue = new Date(this.props.due);
      const timeDueMs = timeDue.getTime();
      const now = new Date().getTime();
      const timeUntilDue = timeDueMs - now;

      setTimeout(() => {
        this.sendNotification()
      }, timeUntilDue);
    }
  }

  handlePermissionGranted(){
    this.setState({
      ignore: false
    });
  }

  handlePermissionDenied(){
    this.setState({
      ignore: true
    });
  }

  handleNotSupported(){
    this.setState({
      ignore: true
    });
  }

  handleNotificationOnClick(e, tag){
    window.focus();
  }

  handleNotificationOnError(e, tag){
    console.log(e, "Notification error tag: " + tag);
  }

  sendNotification(){
    if(this.state.ignore) {
      return;
    }

    const now = Date.now();
    const title = `${this.props.name} is due now!`;
    const encouragements = [
      "You can do it!",
      "It's totally doable!",
      "You're a rockstar!",
      "You're crushing it!",
      "You are not alone!",
      "Believe in yourself!",
      "Take it a step at a time!",
      "Treat yourself when it's done!"
    ]
    const tag = now;

    const options = {
      tag: tag,
      body: encouragements[Math.floor(Math.random() * (encouragements.length - 0))],
      lang: "en",
      dir: "ltr"
    }

    this.setState({
      title: title,
      options: options
    });
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
        <Notification 
          ignore={this.state.ignore && this.state.title !== ""}
          notSupported={this.handleNotSupported.bind(this)}
          onPermissionGranted={this.handlePermissionGranted.bind(this)}
          onPermissionDenied={this.handlePermissionDenied.bind(this)}
          onClick={this.handleNotificationOnClick.bind(this)}
          onError={this.handleNotificationOnError.bind(this)}
          timeout={5000}
          title={this.state.title}
          options={this.state.options}
        />
      </li>
    );
  }
}

export default Item;
