import React, { Component } from 'react';
import MessageList from './components/MessageList';
import SendMessageForm from './components/SendMessageForm';
import RoomList from './components/RoomList';
import NewRoomForm from './components/NewRoomForm';
import './App.css';

import Chatkit from '@pusher/chatkit'

import {url, instanceLocator} from './config.js';

class App extends Component {

  state = {
    messages: []
  }

  componentDidMount() {
    const chatManager = new Chatkit.ChatManager({
      instanceLocator: instanceLocator,
      userId: 'Nick',
      tokenProvider: new Chatkit.TokenProvider({
        url: url
      })
    })
    chatManager.connect()
    .then(currentUser => {
      currentUser.subscribeToRoom({
        roomId: 17500194,
        hooks: {
          onNewMessage: message => {
            this.setState({ messages: [...this.state.messages, message]})
          }
        }
      })
    })
  }

  render() {
    return (
      <div>
        <RoomList />
        <MessageList messages={this.state.messages} />
        <SendMessageForm />
        <NewRoomForm />
      </div>
    );
  }
}

export default App;
