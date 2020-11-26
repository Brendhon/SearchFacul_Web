import React, { useState } from 'react'
import './Card.css'

import { FiTrash2, FiEdit } from 'react-icons/fi'
import Alert from '@material-ui/lab/Alert'
import Modal from '@material-ui/core/Modal'

import CourseForm from '../Form/Course'

const Card = props => {

    // Declaração de estados
    const [visible, setVisible] = useState("alert-none")
    const [open, setOpen] = useState(false)

    // Declaração de funções
    const visibleTrue = _ => setVisible("alert-absolute")
    const visibleFalse = _ => setVisible("alert-none")

    const handleOpen = _ => setOpen(true)
    const handleClose = _ => setOpen(false)

    return (
        <div className="card-container">

            {/* Cabeçalho do Card */}
            <header className="card-top">

                {!props.authenticated ? <div style={{ margin: 10 }} /> :

                    <div className="card-top-authenticated">

                        <button className="card-top-button" onClick={handleOpen}>
                            <FiEdit />
                        </button>

                        <button className="card-top-button" onClick={visibleTrue}>
                            <FiTrash2 />
                        </button>

                    </div>
                }

                <div className="card-ies">
                    <strong >Instituto Nacional de Telecomunicações</strong>
                </div>

            </header>

            {/* Conteúdo do Cartão */}
            <div className="card-content">

                <h5 className="card-content-title"> Engenharia de computação</h5>
                <p className="card-content-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque justo nulla, volutpat in sollicitudin vitae, sollicitudin eget risus. Nulla facilisi. Suspendisse congue, quam eu pharetra convallis, purus lacus malesuada purus, vitae blandit turpis nunc ac nisi. Suspendisse vitae iaculis orci, sed venenatis odio. Integer eget dui et felis ullamcorper laoreet. Integer egestas aliquam egestas. Etiam vitae eleifend metus. Nulla porta lorem eu diam lacinia, nec sollicitudin tellus sodales. Donec eros risus, ultrices eget urna in, gravida semper urna. Pellentesque eleifend mi at felis tempus rutrum. Nullam nulla felis, semper quis convallis elementum, finibus fringilla libero. Nunc sodales, massa id fermentum interdum, nibh tellus aliquam ligula, vel maximus lectus turpis vitae metus.</p>

            </div>

            {/* Rodapé do Cartão */}
            <footer className="card-bottom">

                <a href="/profile">Saiba mais</a>

            </footer>

            {/* Componentes com posições não fixadas */}
            <div className={visible}>
                <Alert onClose={visibleFalse}>Sucesso ao deletar</Alert>
            </div>

            <Modal open={open} onClose={handleClose}>

                <div className="modal-box">
                    
                    <CourseForm title="Digite os novos dados"/>

                    <div className="alert-absolute">
                        <Alert severity="info">Caso não queira alterar algum dado, apenas deixe-o em branco!</Alert>
                    </div>
                    
                </div>

            </Modal>

        </div>
    )
}

export default Card 