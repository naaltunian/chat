import React from 'react';

class SendMessageForm extends React.Component {

  state = {
    message: ''
  }

  handleChange = (e) => {
    this.setState({ message: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
  }

  render(){
    return(
      <div className="message-list">
        <form onSubmit={this.handleSubmit} className="send-message-form">
          <input
            onChange={this.handleChange}
            type="text"
            placeholder="Enter Message Here"
            />
        </form>
      </div>
    )
  }
}

export default SendMessageForm;
