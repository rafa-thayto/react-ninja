'use strict'

import React, { Component } from 'react'
import Button from './button'

export default class App extends Component {
  render () {
    return (
      <div className='container' onClick={e => alert('Me clicou')}>
        <Button>
          App Children
          <button>Botao dentro do botao</button>
        </Button>
      </div>
    )
  }
}
