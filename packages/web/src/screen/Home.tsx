import * as React from 'react';
import styled from 'styled-components'
import Search from './../components/Search'

const Home = ({company, setValue}: any) => {

    const Div = styled.div`
        font-family: 'Times New Roman', Times, serif;
        font-size: 3em;
        display:flex;
        justify-content: center;
        align-items: center;
        padding: 3em;
        color: #9FA7FC;
    `

    if(!company){
        return (
            <div>
                <Search setValue={setValue}/>
                <Div>Nada encontrado, Pesquise o nome da empresa!</Div>
            </div>
        )
    }else{
        return (
            <div>
                <Search setValue={setValue}/>
            </div>
        )
    }
}

export default Home