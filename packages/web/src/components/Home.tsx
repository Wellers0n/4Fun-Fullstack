import * as React from 'react';

const Home = ({company, setValue}: any) => {
    let nome:string
    function buscar(){
        return setValue(nome)
    }
    return (
        <div>routers
        <div>company: {company.name}</div>
            <input
                value={nome}
                onChange={(e) =>  {
                    return nome = e.target.value
                }}
                type="search"
                placeholder="Search"
                aria-label="Search"
                />
            <button onClick={buscar}>Buscar</button>
        </div>
    )
}

export default Home