import React, { Component } from 'react'
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';

export default class Contact extends Component {
  constructor(props) {
    super(props)
    this.state = {
      subject: null,
      message: null
    }
  }

  render() {
    return (
      <div>
        <h1>Contact</h1>
        <TextField
          value={this.state.subject}
          floatingLabelText='Please set a subject'
          errorText='To filter out unnecessary of irrelevant messages, most people spend just a fraction of a second evaluating email subject lines. If the subject line doesn’t immediately capture their attention, they move on to the next message in their inbox—even though the main body of the email may contain information that is valuable and useful to their business.'
        />
        <TextField
          value={this.state.message}
          multiline={true}
          floatingLabelText='Message'
          errorText='No use in sending emails if the message box is empty, right?'
        />
      </div>
    )
  }
}

Contact.contextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};
