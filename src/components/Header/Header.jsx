import React, { useState } from 'react'
import './Header.css'

import { Link } from 'react-router-dom'

import books from '../../assets/img/logo.svg'

import UniversityForm from '../Form/University'
import Modal from '../Modal/Modal'

const Header = props => {

    // Declaração de estados
    const [open, setOpen] = useState(false)

    // Declaração de funções
    const handleOpen = _ => setOpen(true)
    const handleClose = _ => setOpen(false)

    return (
        <header className="header-container">

            <div className="header-logo">
                <img className="mr-3" src={books} alt="Livros"></img>
                <Link to="/" className="a-link header-home">Home</Link>
            </div>

            {!props.authenticated ?

                <div className="header-content">
                    <Link to="/logon" className="button logon-button">Login</Link>
                    <Link to="/register" className="button register-button">Cadastrar</Link>
                </div> :

                <div className="header-content">
                    <button className="button-outline header-edit" onClick={handleOpen}>
                        Edit
                    </button>
                    <Link to="/" className="button-outline header-logout">Logout</Link>
                </div>
            }

            <Modal open={open} onClose={handleClose}>
                <UniversityForm title="Digite os novos dados" />
            </Modal>

        </header>


    )
}

export default Header 