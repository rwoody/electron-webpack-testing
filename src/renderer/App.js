import React, {Component} from 'react'
import {
  Link,
  Route,
  Switch
} from 'react-router-dom'

import {HomeScreen} from './HomeScreen'
import {LoginScreen} from './LoginScreen'

export class App extends Component {
  render() {
    return (
      <div>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/login'>Login</Link></li>
        </ul>
        <Switch>
          <Route exact path='/' component={HomeScreen} />
          <Route path='/login' component={LoginScreen} />
        </Switch>
      </div>
    )
  }
}