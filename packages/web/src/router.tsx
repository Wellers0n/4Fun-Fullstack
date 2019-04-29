import * as React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './screen/Home'
import Info from './screen/Info'

const router = ({companies, setValue}: any) => {
    return (
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path="/" exact render={(prop) => <Home prop={prop} company={companies} 
                           setValue={setValue}/>}
                    />
                    <Route path="/info/:id" render={({location}) => <Info location={location}/>} />

                </Switch>
            </div>
        </BrowserRouter>
    )
}

export default router