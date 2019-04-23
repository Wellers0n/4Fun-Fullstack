import React, {useState} from 'react'
import { hot } from 'react-hot-loader'
import './app.css'
import {graphql, QueryRenderer} from 'react-relay'
import environment from './relay/environment'
import Router from './router'



const App = () => {
  let [name, setName] = useState('Google')

  function setValue(name:any){
     setName(name)
  }

  return (
    <QueryRenderer
      environment={environment}
      query={graphql`
        query  appQuery($name: String!){
          company(name: $name){
            name
          }
        }
      `}
      variables={{name: name}}
      render={({error, props}) => {
        if(error){
          return <div>erro!</div>
        }
        if(!props){
          return <div>Loading!</div>
        }
        return <Router setValue={setValue} companies={props.company}/>
      }}
    />
  )
}

export default hot(module)(App)
