import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import React from 'react'
import App from './App'
import ReactDom from 'react-dom'
const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'add':
      return state + 1
    case 'minus':
      return state - 1
    default:
      return state
  }
}

const store = createStore(counterReducer, compose(applyMiddleware(thunk), window.devToolsExtension ? window.devToolsExtension : f => f))

ReactDom.render(
  (<Provider store={store}>
    <App />
  </Provider>),
  document.getElementById('root')
)