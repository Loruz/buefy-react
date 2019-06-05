import React, { Component } from 'react'

import { Checkbox } from 'buefy-react'

export default class App extends Component {
  render () {
    return (
      <div>
        <Checkbox>Check me!</Checkbox>
        <Checkbox size="is-large">Check me!</Checkbox>
        <Checkbox type="is-danger"><b>Check me!</b></Checkbox>
        <Checkbox disabled>Check me!</Checkbox>
        <Checkbox indeterminate>Check me!</Checkbox>
      </div>
    )
  }
}
