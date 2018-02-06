import React, {Component} from 'react'
import {
  Link,
  Route,
  Switch
} from 'react-router-dom'

import * as Screens from './screens'

export class App extends Component {
  render() {
    return (
      <div>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/login'>Login</Link></li>
        </ul>
        <Switch>
          <Route exact path='/' component={Screens.Home} />
          <Route path='/about' component={Screens.About} />
          <Route path='/login' component={Screens.Login} />
        </Switch>
      </div>
    )
  }
}