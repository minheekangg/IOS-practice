import React, {Fragment, Component} from 'react'
import { Route, Switch, Redirect, withRouter } from "react-router-dom";

import welcome from './welcome'
import NavBar from './navbar'

class App extends React.Component{

    render(){
        return <Fragment>
            <NavBar />
            <Switch>
                <Route exact path="/" render={() => <Redirect to="/welcome" />} />
                <Route exact path="/welcome" component={welcome} />
            </Switch>
        </Fragment>
    }
}

export default withRouter(App)