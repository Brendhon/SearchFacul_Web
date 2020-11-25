import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import books from '../../assets/img/books.svg'

const Header = props =>

    <header className="header-container">

        <div className="header-logo">
            <img className="mr-3" src={books} alt="Livros"></img>
            <Link to="/" className="header-home" >Home</Link>
        </div>

        {!props.authenticated ?
            <div className="header-content">
                <strong className="btn btn-primary mr-3">Login</strong>
                <Link to="/register" className="btn btn-secondary">Cadastrar</Link>
            </div> :
            <div className="header-content">
                <Link to="/" className="btn btn-outline-danger header-logout">Logout</Link>
            </div>
        }

    </header>

export default Header 