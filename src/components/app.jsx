/* eslint-disable */
import React, { Component } from 'react'
import CSSX from 'react-cssx'

export class App extends Component {
  render() {
    return (
      <div>
        <CSSX styles={ this.css() }>
          <h1>This is react application</h1>
        </CSSX>
      </div>
    )
  }
  css() {
    const color = '#BADA55'

    return (
      <style>
        h1 {
          color: {{ color }};
          text-decoration: underline;
        }
      </style>
    )
  }
}

export default App
