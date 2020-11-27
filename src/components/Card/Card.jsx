import React, { useState } from 'react'
import './Card.css'

import { FiTrash2, FiEdit } from 'react-icons/fi'

import Alert from '../Alert/Alert'
import Modal from '../Modal/Modal'

import CourseForm from '../Form/Course'
import CardInfo from '../CardInfo/CardInfo'

const Card = props => {

    // Declaração de estados
    const [alert, setAlert] = useState(false)
    const [edit, setEdit] = useState(false)
    const [info, setInfo] = useState(false)

    // Declaração de funções
    const alertOpen = _ => setAlert(true)
    const alertClose = _ => setAlert(false)

    const editOpen = _ => setEdit(true)
    const editClose = _ => setEdit(false)

    const infoOpen = _ => setInfo(true)
    const infoClose = _ => setInfo(false)

    return (
        <div className="card-container">

            {/* Cabeçalho do Card */}
            <header className="card-top">

                {!props.authenticated ? <div style={{ margin: 10 }} /> :

                    <div className="card-top-authenticated">

                        <button className="card-top-button" onClick={editOpen}>
                            <FiEdit />
                        </button>

                        <button className="card-top-button" onClick={alertOpen}>
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

                <div className="card-content-title">
                    <h5> Engenharia de computação </h5>
                </div>
                <div className="card-content-text">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque justo nulla, volutpat in sollicitudin vitae, sollicitudin eget risus. Nulla facilisi. Suspendisse congue, quam eu pharetra convallis, purus lacus malesuada purus, vitae blandit turpis nunc ac nisi. Suspendisse vitae iaculis orci, sed venenatis odio. Integer eget dui et felis ullamcorper laoreet. Integer egestas aliquam egestas. Etiam vitae eleifend metus. Nulla porta lorem eu diam lacinia, nec sollicitudin tellus sodales. Donec eros risus, ultrices eget urna in, gravida semper urna. Pellentesque eleifend mi at felis tempus rutrum. Nullam nulla felis, semper quis convallis elementum, finibus fringilla libero. Nunc sodales, massa id fermentum interdum, nibh tellus aliquam ligula, vel maximus lectus turpis vitae metus.</p>
                </div>

            </div>

            {/* Rodapé do Cartão */}
            <footer className="card-bottom">

                <button className="a-link" onClick={infoOpen}>Saiba mais</button>

            </footer>

            {/* Componentes com posições não fixadas */}
            <Alert type="info" text="Deletado com sucesso" open={alert} onClose={alertClose} />

            <Modal open={edit} onClose={editClose}>
                <CourseForm title="Digite os novos dados" />
            </Modal>

            <Modal open={info} onClose={infoClose}>
                <CardInfo />
            </Modal>

        </div>
    )
}

export default Card 