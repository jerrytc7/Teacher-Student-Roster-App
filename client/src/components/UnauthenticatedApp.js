import React from 'react'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Login from './Login'

function UnauthenticatedApp({setUser}) {
    return (
            <Switch>
                <Route exact path="/" render={(routeprops) => <Login setUser={setUser}/>}/>
            </Switch>
    )
}

export default UnauthenticatedApp
