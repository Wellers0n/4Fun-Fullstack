import * as React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Login from './screen/Login'
import Info from './screen/Info'

const router = ({companies, setValue}: any) => {
    return (
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path="/" exact component={Login}/>
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