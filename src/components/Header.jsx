import React from 'react'
import './Header.css'
import books from '../assets/img/books.svg'

const Header = _ =>
    <header className="header border-bottom">

        <div className="logo">
            <img className="mr-3" src={books} alt="Livros"></img>
            <strong>Search Facul</strong>
        </div>

        <div className="content">
            <strong className="btn btn-primary mr-3">Login</strong>
            <strong className="btn btn-secondary">Cadastre sua universidade</strong>
        </div>

    </header>

export default Header 