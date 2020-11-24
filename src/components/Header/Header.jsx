import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import books from '../../assets/img/books.svg'

const Header = _ =>
    <header className="header">

        <div className="logo">
            <img className="mr-3" src={books} alt="Livros"></img>
            <Link to="/" className="home" >Home</Link>
        </div>

        <div className="content">
            <strong className="btn btn-primary mr-3">Login</strong>
            <Link to="/register" className="btn btn-secondary">Cadastrar</Link>
        </div>

    </header>

export default Header 