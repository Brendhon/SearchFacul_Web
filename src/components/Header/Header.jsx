import React, { useState } from 'react'
import './Header.css'

import { Link } from 'react-router-dom'

import books from '../../assets/img/books.svg'

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
                <Link to="/" className="header-home" >Home</Link>
            </div>

            {!props.authenticated ?

                <div className="header-content">
                    <strong className="btn btn-primary mr-3">Login</strong>
                    <Link to="/register" className="btn btn-secondary">Cadastrar</Link>
                </div> :

                <div className="header-content">

                    <button className="btn btn-outline-secondary .header-edit" onClick={handleOpen}>
                        Edit
                    </button>
                    <Link to="/" className="btn btn-outline-danger header-logout">Logout</Link>

                </div>
            }

            <Modal open={open} onClose={handleClose}>
                <UniversityForm title="Digite os novos dados" />
            </Modal>

        </header>


    )
}

export default Header 