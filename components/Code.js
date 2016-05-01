import React, { Component } from 'react'

export default class Code extends Component {
  render() {
    return (
      <div>
        <h1>Code</h1>
      </div>
    )
  }
}

Code.contextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};
