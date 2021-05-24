import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import { store, persistor } from "./redux/store"
import { PersistGate } from "redux-persist/integration/react"
import { createGlobalStyle } from 'styled-components'

const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 16px;
    color: #fff;
    line-height: 24px;
    font-family: Ubuntu;
  }
`

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <Global />
    <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
)
