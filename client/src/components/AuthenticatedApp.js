import React from 'react'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Teachers from "./Teachers"
import Students from "./Students"

function AuthenticatedApp() {
    return (
      <Switch>
        <Route exact path ="/" component={Teachers} />
        <Route exact path ="/students" component={Students} />
        <Route exact path ="/teachers" component={Teachers} />
      </Switch>
    )
}
export default AuthenticatedApp