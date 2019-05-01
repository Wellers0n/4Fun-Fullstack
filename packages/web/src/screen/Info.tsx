import * as React from 'react'
import styled from 'styled-components'

const Info = ({location}: any) => {
    const {products} = location.state

    const ContainerTop = styled.div`
        width: 100%;
        background: #6976FB;
        padding: 2em;
    `
    return (
        <ContainerTop>
            <div>{products.name}</div>
        </ContainerTop>
    )
}

export default Info