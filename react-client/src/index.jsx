import React from 'react';
import ReactDOM from 'react-dom';
import Chats from './components/Chats.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      username: 'Gorgeous',
      newUser: true,
    }

    this.getName = this.getName.bind(this);
    this.initializeUser = this.initializeUser.bind(this);
    this.fetchLatestMessages = this.fetchLatestMessages.bind(this);
  }

  componentDidMount() {
    this.getName();
  }

  getName() {
    let username = window.prompt('Hello, what is your name?') || 'Gorgeous';
    username = username[0].toUpperCase() + username.substring(1).toLowerCase();
    this.setState({ username }, this.initializeUser);
  }

  initializeUser() {
    const { username } = this.state;
    if (username === 'Gorgeous') {
      this.setState({ newUser: true });
      return;
    } else {
      this.fetchLatestMessages(username);
    }
  }

  fetchLatestMessages(username) {
    fetch(`/messages/${username}`)
      .then(data => data.json())
      .then((messages) => this.setState({
        messages,
        newUser: true,
      }))
      .catch((error) => {
        console.log('error', error);
        this.setState({ newUser: true })
      });
  }

  render() {
    const { messages, username, newUser } = this.state;
    return (
      <div>
        <h1>Hello, {username}</h1>
        {newUser && <h3>What would you like to talk about today?</h3>}
        {!newUser && <h3>Welcome back! Here is where you left off the last time</h3>}
        <Chats messages={messages} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));