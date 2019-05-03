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
                    <Route path="/info/:id" render={({location, history}) => <Info location={location} history={history}/>} />
                    <Route component={NoMatch} />
                </Switch>
            </div>
        </BrowserRouter>
    )
}

const NoMatch = () => {
    return (
        <div>pag not found</div>
    )
}

export default router