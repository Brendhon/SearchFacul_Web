import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import Logon from './pages/Logon'
import UniversityRegister from './pages/UniversityRegister'
import UniversityUpdate from './pages/UniversityUpdate'
import CourseRegister from './pages/CourseRegister'
import CourseUpdate from './pages/CourseUpdate'
import Profile from './pages/Profile'
import Search from './pages/Search'
import SearchResult from './pages/SearchResult'

import { isAuthenticated } from '../src/utils/auth'

const PrivateRoute = ({ component: Component, ...rest }) => (
    
    <Route {...rest} render={props => (

        // Verificando se ele esta autentificado: Sim - renderiza; Não - redireciona
        isAuthenticated() ?
            (
                <Component {...props} />
            ) :
            (
                <Redirect to={{ pathname: '/logon', state: { from: props.location } }} />
            )

    )} />
)

const Routes = _ =>

    <BrowserRouter>

        <Switch>

            <Route path='/' exact component={Search} />
            <Route path='/result' component={SearchResult} />
            <Route path='/logon' component={Logon} />
            <PrivateRoute path='/profile' component={Profile} />
            <Route path='/register' component={UniversityRegister} />
            <PrivateRoute path='/university/update' component={UniversityUpdate} />
            <PrivateRoute path='/course/create' component={CourseRegister} />
            <PrivateRoute path='/course/update/:id' component={CourseUpdate} />

            {/* Redirecionando para a pagina principal caso não tenha a rota pesquisada */}
            <Route path='*'>
                <Redirect to="/" />
            </Route>

        </Switch>

    </BrowserRouter>

export default Routes