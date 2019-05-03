import * as React from 'react'
import styled from 'styled-components'

const Info = ({location, history}: any) => {
    const {products} = location.state

    const ContainerTop = styled.div`
        width: 100%;
        background: #6976FB;
        width: 100%;
        height: 100px;
        display: flex;
        align-items: center;
        padding: 0 25px;
    `

    const Bottom = styled.button`
        background: #9FA7FC;
        height: 60px;
        width: 60px;
        border-radius: 50%;
        border-color: #9FA7FC;
        outline: none;
        font-size: 1.5em;
        font-weight: bold;
        color: white;

    `

    const Container = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column
    `
    const Info = styled.div`
        color: #9FA7FC;
        float:right;
        padding-left: 5px; 
    `

    const Text = styled.div`
        align-items: center;
        color: #6976FB;
        font-size: 1.6em;
        margin-top: 10px;
    `

    return (
        <div>
            <ContainerTop>
                <Bottom onClick={() => history.goBack()}>{"<"}</Bottom>
            </ContainerTop>
            <Container>
            <Text>Name: <Info>{products.name}</Info></Text>
            <Text>Price: <Info>{products.price}</Info></Text>
            <Text>MongoDB ID: <Info>{products._id}</Info></Text>
            </Container>
        </div>
    )
}

export default Info