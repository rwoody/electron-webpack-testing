import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {HashRouter as Router} from 'react-router-dom'
import {ApolloClient} from 'apollo-client'
import {ApolloProvider} from 'react-apollo'
import {HttpLink} from 'apollo-link-http'
import {InMemoryCache} from 'apollo-cache-inmemory'
import {App} from './App'

const client = new ApolloClient({
  link: new HttpLink({uri: 'https://0v9rj7m375.lp.gql.zone/graphql'}),
  cache: new InMemoryCache(),
})

const components = (
  <ApolloProvider client={client}>
    <Router>
      <App />
    </Router>
  </ApolloProvider>
)

ReactDOM.render(
  components,
  document.getElementById('app')
)
