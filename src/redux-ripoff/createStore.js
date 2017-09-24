export function createStore (reducer, preloadedState, enhancer) {
  let currentState = preloadedState
  let currentReducer = reducer
  const listeners = []
  
  const actions = {
    INIT: '@@redux/INIT'
  }
  
  const getState = () => currentState
  const replaceReducer = (newReducer) => currentReducer = newReducer
  const subscribe = (listener) => {
    listeners.push(listener)
    return function unsubscribe () {
      const index = listeners.indexOf(listener)
      listeners.splice(index, 1)
    }
  }
  const dispatch = (action) => {
    currentState = currentReducer(currentState, action)
    listeners.forEach((listener) => listener())
  }
  
  dispatch(actions.INIT)
  
  return {
    getState,
    subscribe,
    dispatch,
    replaceReducer,
  }
  
}