import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { FiPower } from 'react-icons/fi'
import books from '../../assets/img/books.svg'

const Header = props =>
    <header className="header">


        <div className="logo">
            <img className="mr-3" src={books} alt="Livros"></img>
            <Link to="/" className="home" >Home</Link>
        </div>

        {!props.authenticated ?
            <div className="content">
                <strong className="btn btn-primary mr-3">Login</strong>
                <Link to="/register" className="btn btn-secondary">Cadastrar</Link>
            </div> :
            <div className="content">
                <Link to="/" className="btn btn-outline-danger logout"><FiPower /></Link>
            </div>
        }


    </header>

export default Header 