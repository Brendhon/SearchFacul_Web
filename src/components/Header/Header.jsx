import React from 'react'
import './Header.css'

import books from '../../assets/img/logo.svg'

import { Link } from 'react-router-dom'

import { isAuthenticated } from '../../utils/auth'

const Header = _ => {

    // Verificando se o usuário esta autentificado 
    const authorization = isAuthenticated()

    return (
        <header className="header-container">

            <div className="header-logo">
                <img className="mr-3" src={books} alt="Livros"></img>
                <Link to="/" className="a-link header-home">Home</Link>
            </div>

            {!authorization ?

                <div className="header-content">

                    <Link to="/logon" className="button logon-button">Login</Link>
                    <Link to="/register" className="button register-button">Cadastrar</Link>
                    
                </div> :

                <div className="header-content">
                    
                    <Link to="/profile" className="button-outline header-profile">Profile</Link>

                    <Link to="/"
                        onClick={() => { localStorage.removeItem('authorization') }}
                        className="button-outline header-logout">
                        Logout
                    </Link>

                </div>
            }

        </header>


    )
}

export default Header 