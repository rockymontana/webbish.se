import React, { Component } from 'react'


export default class Home extends Component {
  constructor(props, context) {
    super(props, context)

    this.styles = {
      headline: {
        fontFamily: 'Comfortaa',
        paddingTop: 0,
      }
    }
}
  render() {
    return (
      <div>
          <h1 style={this.styles.headline}>All things Web...ish</h1>
          <p>
          At Webbish we focus on web related system development, web consulting and things related to a successful business on the internet.
          We are independent from any platform, which gives us the freedom to focus on what we do best, having the user experience in mind in everything we do. We are highly committed to our customers and love to develop systems and solutions in a way that no one has thought of before.
        </p>
      </div>
    )
  }
}
