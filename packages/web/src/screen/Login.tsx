import * as React from 'react';
import styled from 'styled-components'

const Login = ({company, setValue, prop}: any) => {

    const Div = styled.div`
        font-family: 'Times New Roman', Times, serif;
        display:flex;
        width: 100%;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #9FA7FC;
    `
    const Msg = styled.div`
        font-family: 'Times New Roman', Times, serif;
        display:flex;
        font-size: 2.7em;
        width: 100%;
        padding: 50px 0;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #9FA7FC;
    `
    const ContainerImg = styled.div`
        display:flex;
        justify-content: center;
        align-items: center;
        padding: 2em;
    `
    const Title = styled.div`
        display:block;
        text-align: center;
        padding-top: 40px;
        padding-bottom: 5px;
        color: #6976FB;
        font-size: 1.6em;
        width: 10%;
        border-bottom: 1px solid #9FA7FC
    `
    const Text = styled.div`
        display:flex;
        justify-content: center;
        padding-top: 10px;
        padding-bottom: 10px;
        align-items: center;
        color: #6976FB;
        font-size: 1.6em;
    `

    const Info = styled.div`
        display:flex;
        padding-left: 10px;
        justify-content: center;
        align-items: center;
        color: #9FA7FC;
    `
    const ContainerProduct = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        flex-direction: inline;
        width: 85%;
        padding: 50px 0;
    `

   return(
       <div>Login</div>
   )
}

export default Login