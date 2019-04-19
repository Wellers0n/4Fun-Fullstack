import * as React from 'react'
import { hot } from 'react-hot-loader'
import './app.css'
import {graphql, QueryRenderer} from 'react-relay'
import environment from './relay/environment'
import Companies from './Companies'

const App = () => (
  <QueryRenderer
    environment={environment}
    query={graphql`
      query  appQuery{
          ...Companies_companies
      }
    `}
    variables={{}}
    render={({error, props}) => {
      if(error){
        return <div>erro!</div>
      }
      if(!props){
        return <div>Loading!</div>
      }
      return <Companies companies={props}/>
    }}
  />
)

export default hot(module)(App)
