import React from 'react';
import Message from './Message.js';

class MessageList extends React.Component {
  render(){
    return(
      <div className="message-list">
        {this.props.messages.map((message, index) => {
          return(
            <Message key={index} userName={message.senderId} text={message.text} />
          )
        })}
      </div>
    )
  }
}

export default MessageList;
