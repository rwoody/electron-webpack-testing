import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import {App} from './App'
const components = (
  <Router>
    <App />
  </Router>
)

ReactDOM.render(
  components,
  document.getElementById('app')
)