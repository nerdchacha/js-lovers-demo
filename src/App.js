import React, { Component } from 'react'
import { increment, decrement } from './actions'
import store from './store'
import style from './style.css'

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
      <div className="card">
        <div>{count}</div>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
      </div>
    )
  }
}

export default App
