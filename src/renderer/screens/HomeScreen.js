import PropTypes from 'prop-types'
import React, {Component} from 'react'
import {graphql} from 'react-apollo'
import gql from 'graphql-tag'
import {compose} from 'recompose'

import {renderWhileLoading} from '../hoc/renderWhileLoading'
import {Loading} from '../ui/loading'

export const HOME_QUERY = gql`
  {
    home {
      path
      title
      items
      counter
    }
  }
`

class HomeScreen extends Component {
  static propTypes = {
    data: PropTypes.object
  }

  render() {
    const {home} = this.props
    return (
      <div>
        <h1>{home.title}</h1>
        {home.items && home.items.length > 0 &&
          <ul>
            {home.items.map(i => <li key={i}>{i}</li>)}
          </ul>
        }
        {home.items && home.items.length === 0 &&
          <p>No items found</p>
        }
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <p>Counter: {home.counter}</p>
          <div style={{flexDirection: 'row'}}>
            <button>Inc</button>
            <button>Dec</button>
          </div>
        </div>
        <pre>Path: {home.path}</pre>
      </div>
    )
  }
}

HomeScreen = renderWhileLoading(Loading)(HomeScreen)

export {HomeScreen}
export const withHome = graphql(HOME_QUERY, {
  props: ({data}) => ({...data})
})
export default withHome(HomeScreen)
