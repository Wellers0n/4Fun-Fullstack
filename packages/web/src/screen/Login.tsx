import * as React from 'react';
import styled from 'styled-components'
import auth from './../auth'

const Login = ({history}: any) => {
    function clickMe<T>(e: any){
        e.preventDefault();
        localStorage.setItem('token', 'wellerson')
        if(auth()){
            history.push('/home/')
        }
    }
   return(
       <div>
           <button onClick={clickMe}>click</button>
       </div>
   )
}

export default Login