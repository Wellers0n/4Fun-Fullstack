import * as React from 'react'
import { hot } from 'react-hot-loader'
import './app.css'
import {graphql, QueryRenderer} from 'react-relay'
import environment from './relay/environment'

const App = () => (
  <QueryRenderer
    environment={environment}
    query={graphql`
      query  appQuery{
        companies {
          name
        }
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
      return <div>Foi: {props.companies.map((companie:any, index:number) => <div key={index}>{companie.name}</div>)}</div>
    }}
  />
)

export default hot(module)(App)
