import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Logon from './pages/Logon'
import Register from './pages/Register'
import CreateCourse from './pages/CreateCourse'
import Profile from './pages/Profile'
import Search from './pages/Search'

const Routes = _ =>

    <BrowserRouter>

        <Switch>
            <Route path='/' exact component={Search} />
            <Route path='/logon' exact component={Logon} />
            <Route path='/register' component={Register} />
            <Route path='/profile' component={Profile} />
            <Route path='/course/create' component={CreateCourse} />
        </Switch>

    </BrowserRouter>

export default Routes