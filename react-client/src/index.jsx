import React from 'react';
import ReactDOM from 'react-dom';
import Chats from './components/Chats.jsx';
import ChatInput from './components/ChatInput.jsx';
import sampleData from '../../database-mongo/sampleData.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      username: 'gorgeous',
      newUser: true,
      input: '',
    }

    this.getName = this.getName.bind(this);
    this.initializeUser = this.initializeUser.bind(this);
    this.updateScroll = this.updateScroll.bind(this);
    this.fetchLatestMessages = this.fetchLatestMessages.bind(this);
    this.createMessage = this.createMessage.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.updateMessages = this.updateMessages.bind(this);
    this.clearInput = this.clearInput.bind(this);
  }

  componentDidMount() {
    this.getName();
  }

  getName() {
    let username = window.prompt('Hello, what is your name?') || 'gorgeous';
    username = username.toLowerCase();
    this.setState({ username }, this.initializeUser);
  }

  initializeUser() {
    const { username } = this.state;
    if (username === 'gorgeous') {
      this.setState({ newUser: true, messages: [], });
      return;
    } else {
      this.fetchLatestMessages(username);
    }
  }

  updateScroll() {
    let element = document.getElementsByClassName('all-chats')[0];
    element.scrollTop = element.scrollHeight;
  }

  fetchLatestMessages(username) {
    fetch(`/messages/${username}`)
      .then(data => data.json())
      .then((messages) => {
        if (messages.length > 0) {
          this.setState({
            messages,
            newUser: false,
          })
        }
        this.updateScroll();
      })
      .catch((error) => {
        console.log('error', error);
        this.setState({ newUser: true })
      });
  }

  handleChange(e) {
    this.setState({
      input: e.target.value
    });
  }

  createMessage() {
    const { username, input } = this.state;
    return {
      creator: username,
      username,
      message: input,
    }
  }

  updateMessages(msg) {
    this.setState({
      messages: [...this.state.messages, msg],
    });
  }

  clearInput() {
    this.setState({ input: '' });
  }

  handleClick(e) {
    e.preventDefault();
    let msg = this.createMessage();
    this.updateMessages(msg);
    this.clearInput();

    fetch('/messages', {
      method: 'POST',
      body: JSON.stringify(msg),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((response) => response.json())
      .then((response) => {
        console.log('response from bot is', response);
        response[0].creator = 'geniebot';
        this.updateMessages(response[0]);
        this.updateScroll();
      })
      .catch(err => console.log('error', err));
  }

  handleKeyPress(e) {
    if (e.key === 'Enter') {
      this.handleClick(e);
    }
  }

  render() {
    const { messages, username, newUser, input } = this.state;
    const capitalized = username[0].toUpperCase() + username.substring(1).toLowerCase();
    return (
      <div className="body-wrapper">
        <h1>Hello, {capitalized}</h1>
        {newUser && <h3>What would you like to talk about today?</h3>}
        {!newUser && <h3>Welcome back! Here is where you left off the last time</h3>}
        <Chats messages={messages} />
        <ChatInput input={input} handleChange={this.handleChange} handleClick={this.handleClick} handleKeyPress={this.handleKeyPress} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));