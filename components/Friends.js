import React, { Component } from 'react'
import Paper from 'material-ui/Paper';

export default class Friends extends Component {
  render() {
    return (
      <div>
        <h1>Code</h1>
      </div>
    )
  }
}

Friends.contextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};
