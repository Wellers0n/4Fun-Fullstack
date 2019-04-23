import * as React from 'react';
import styled from 'styled-components'
import Search from './../components/Search'

const Home = ({company, setValue, prop}: any) => {

    const Div = styled.div`
        font-family: 'Times New Roman', Times, serif;
        font-size: 3em;
        display:flex;
        justify-content: center;
        align-items: center;
        padding: 3em;
        color: #9FA7FC;
    `

    const ContainerImg = styled.div`
        display:flex;
        justify-content: center;
        align-items: center;
        padding: 2em;
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

    if(!company){
        return (
            <div>
                {console.log(prop)}
                <Search setValue={setValue}/>
                <Div>Nada encontrado, Pesquise o nome da empresa!</Div>
            </div>
        )
    }else{
        return (
            <div>
                <Search setValue={setValue}/>
                <ContainerImg>
                    <img width={300} src={company.img}/>
                </ContainerImg>
                <Text>Name: <Info>{company.name}</Info></Text>
                <Text>Global ID: <Info>{company.id}</Info></Text>
                <Text>MongoDB ID: <Info>{company._id}</Info></Text>
            </div>
        )
    }
}

export default Home