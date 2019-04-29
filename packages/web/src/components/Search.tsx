import * as React from 'react';
import styled from 'styled-components'

const Search = ({setValue}: any) => {
    let name:string

    function buscar(){
        if(name == '' || name == undefined || name == null){
            return setValue('')
        }
        return setValue(name)
    }

    const Wrapper = styled.section`
        padding: 2em;
        background: #6976FB;
        display:flex;
        box-sizing: border-box;
        width: 100%;
        justify-content: center
    `; 

    const Input = styled.input`
        padding: 1em;
        width: 700px;
        border: none
        font-size: 1.1em;
        font-family: 'Times New Roman', Times, serif;
        color: #6976FB
        &::placeholder {
            color: #9FA7FC;
        }
    `; 
    const Button = styled.button`
        padding: 1em;
        width: 200px;
        background: #9FA7FC;
        border: none;
        color: white;
        font-size: 1.1em;
        font-family: 'Times New Roman', Times, serif;
        
    `;

    return (
        <Wrapper>
            <Input
                value={name}
                onChange={(e) =>  {
                    e.preventDefault()
                    return name = e.target.value
                }}
                type="search"
                placeholder="Nome da empresa"
                aria-label="Nome da empresa"
                />
            <Button onClick={buscar}>Buscar</Button>
        </Wrapper>
    )
}

export default Search