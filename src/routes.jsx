import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Logon from './pages/Logon'

const Routes = _ =>
    <BrowserRouter>

        <Switch>
            <Route path='/' component={Logon} />
        </Switch>

    </BrowserRouter>



export default Routes