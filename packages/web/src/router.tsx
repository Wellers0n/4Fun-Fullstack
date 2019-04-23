import * as React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './screen/Home'

const router = ({companies, setValue}: any) => {
    return (
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path="/" exact render={() => <Home company={companies} 
                           setValue={setValue}/>}>
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    )
}

export default router