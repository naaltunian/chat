import React from 'react';

const testData = [
  {
    senderId: 'nick',
    text: 'hi'
  },
  {
    senderId: 'noah',
    text: "what's up"
  },
  {
    senderId: 'bram',
    text: 'yo'
  }
]

class MessageList extends React.Component {
  render(){
    return(
      <div className="message-list">
        {testData.map((message) => {
          return(
            <div key={message.senderId}>
            <div>{message.senderId}</div>
            <div>{message.text}</div>
            </div>
          )
        })}
      </div>
    )
  }
}

export default MessageList;
