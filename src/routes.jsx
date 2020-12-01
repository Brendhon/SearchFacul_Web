import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Logon from './pages/Logon'
import Register from './pages/Register'
import UpdateUniversity from './pages/UpdateUniversity'
import CreateCourse from './pages/CreateCourse'
import UpdateCourse from './pages/UpdateCourse'
import Profile from './pages/Profile'
import Search from './pages/Search'
import SearchResult from './pages/SearchResult'

const Routes = _ =>

    <BrowserRouter>

        <Switch>
            <Route path='/' exact component={Search} />
            <Route path='/logon' exact component={Logon} />
            <Route path='/register' component={Register} />
            <Route path='/profile' component={Profile} />
            <Route path='/university/update' component={UpdateUniversity} />
            <Route path='/course/create' component={CreateCourse} />
            <Route path='/course/update/:id' component={UpdateCourse} />
            <Route path='/result' component={SearchResult} />
        </Switch>

    </BrowserRouter>

export default Routes