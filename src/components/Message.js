import React from 'react';

const Message = (props) => {
  return(
    <div className="message">
      <div className="message-username">{this.props.userName}</div>
      <div className="message-text">{this.props.text}</div>
    </div>
  )
}

export default Message;
