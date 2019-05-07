import * as React from 'react'
import { hot } from 'react-hot-loader'
import './app.css'
import {graphql, QueryRenderer} from 'react-relay'
import environment from './relay/environment'
import Router from './router'

const App = () => {
  return <Router/>
}

export default hot(module)(App)
