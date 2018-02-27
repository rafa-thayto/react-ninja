'use strict'

import React, { Component } from 'react'
import Title from './title'
import Square from './square'

export default class App extends Component {
  render () {
    return (
      <div className='container'>
        <Title lastName={0} />
        {['red', 'blue', 'blue'].map((square, index) => (
          <Square key={index} color={square}/>
        ))}
      </div>
    )
  }
}
