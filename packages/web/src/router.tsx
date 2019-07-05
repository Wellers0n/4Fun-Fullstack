import * as React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import PrivateRouter from './components/PrivateRouter'
import Login from './screen/Login'
import Signup from './screen/Signup'
import Home from './screen/Home'
import Create from './screen/CreatePlanet'
import Detail from './screen/DetailPlanet'

const router = () => {
    return (
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path="/" exact component={Login} />
                    <Route path="/signup" component={Signup} />
                    <PrivateRouter path="/home" component={Home} />
                    <PrivateRouter path="/create/planet" component={Create} />
                    <PrivateRouter path="/detail/:id" component={Detail} />
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