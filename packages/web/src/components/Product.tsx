import * as React from 'react';
import styled from 'styled-components';

const Product = ({products, history}:any) => {
    const Container = styled.div`
        display:flex;
        align-items:center;
        flex-direction: column;
        margin: 15px;
        width: 300px;
        height: 150px;
        background-color: #6976FB;
        overflow: hidden;
        position: relative;
        padding-top: 10px;
        box-sizing: border-box
    `
    const Circle = styled.div`
        width: 120px;
        position: absolute;
        left: -100px;
        top: 50%;
        transform: translateY(-50%);
        height: 170px;
        border-radius: 50%;
        background: #9FA7FC;
    `
    const Info = styled.div`
        color: #9FA7FC;
        float:right;
        padding-left: 5px; 
    `

    const Text = styled.div`
        align-items: center;
        color: white;
        font-size: 1.6em;
    `
    const ContainerButtom = styled.div`
        display: flex;
        padding-top: 25px;


    `

    const Buttom = styled.button`
        margin-left: 5px;
        width: 100px;
        height: 40px;
        border: none
        font-size: 1.1em;
        font-family: 'Times New Roman', Times, serif;
        color: #6976FB;
        background: white;
    `

    return (
        <Container>
            <Circle/>
            <Text>Name: <Info>{products.name}</Info></Text>
            <Text>Price: <Info>{products.price}</Info></Text>
            <ContainerButtom>
                <Buttom>Delete</Buttom>
                <Buttom onClick={() => history.push({
                    pathname: `/info/${products._id}`,
                    state: {id: products._id}
                })}>Info</Buttom>
            </ContainerButtom>
        </Container>
    )
}

export default Product