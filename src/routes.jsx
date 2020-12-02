import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Logon from './pages/Logon'
import UniversityRegister from './pages/UniversityRegister'
import UniversityUpdate from './pages/UniversityUpdate'
import CourseRegister from './pages/CourseRegister'
import CourseUpdate from './pages/CourseUpdate'
import Profile from './pages/Profile'
import Search from './pages/Search'
import SearchResult from './pages/SearchResult'

const Routes = _ =>

    <BrowserRouter>

        <Switch>
            <Route path='/' exact component={Search} />
            <Route path='/result' component={SearchResult} />
            <Route path='/logon' exact component={Logon} />
            <Route path='/profile' component={Profile} />
            <Route path='/register' component={UniversityRegister} />
            <Route path='/university/update' component={UniversityUpdate} />
            <Route path='/course/create' component={CourseRegister} />
            <Route path='/course/update/:id' component={CourseUpdate} />
        </Switch>

    </BrowserRouter>

export default Routes