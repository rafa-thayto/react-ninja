'use strict'

import React, { Component } from 'react'

export default class Title extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <h1>Olá { this.props.name + ' ' + this.props.lastName }!</h1>
    )
  }
}
