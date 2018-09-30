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
        {}
      </div>
    )
  }
}

export default MessageList;
