import React, { Component } from 'react'
import { increment, decrement } from './actions'
import store from './store'

class App extends Component {
  constructor () {
    super()
    this.state = { count: store.getState() }
    store.subscribe(() => this.setState({ count: store.getState() }))
  }
  increment () {
    store.dispatch(increment())
  }
  decrement () {
    store.dispatch(decrement())
  }
  render() {
    const { count } = this.state
    return (
      <div>
        <div>Current count : {count}</div>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
      </div>
    )
  }
}

export default App
