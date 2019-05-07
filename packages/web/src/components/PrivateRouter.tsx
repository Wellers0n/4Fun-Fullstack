import * as React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import auth from './../auth'

const PrivateRouter: React.StatelessComponent<RouteProps> = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} render={(props) => (
            auth() ? (
                <div>
                    <Component {...props}/>
                </div>
            ) : <Redirect to={{pathname: '/', state: {from: props.location}}}/>
        )} />
    )
}

export default PrivateRouter;