import { hot } from 'react-hot-loader/root'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import 'antd/dist/antd.css'
import { GlobalStyle } from './styles'

const HotReloadingApp = hot(() => (
  <>
    <App />
    <GlobalStyle />
  </>
))

ReactDOM.render(<HotReloadingApp />, document.getElementById('root'))
