import React, { useState } from 'react'
import './Card.css'

import { FiTrash2, FiEdit } from 'react-icons/fi'

import Modal from '../Modal/Modal'

import CourseForm from '../Form/Course'
import CardInfo from '../CardInfo/CardInfo'

import Alert from '../Alert/Alert'

const Card = props => {

    const [info, setInfo] = useState(false)
    const [hide, setHide] = useState(false)
    const [edit, setEdit] = useState(false)

    const editOpen = _ => setEdit(true)
    const editClose = _ => setEdit(false)

    const infoOpen = _ => setInfo(true)
    const infoClose = _ => setInfo(false)

    return (
        <div className={hide ? "card-container card-container-hide" : "card-container"}>

            {/* Cabeçalho do Card */}
            <header className="card-top">

                {!props.authenticated ? <div style={{ margin: 10 }} /> :

                    <div className="card-top-authenticated">

                        <button className="card-top-button" onClick={editOpen}>
                            <FiEdit />
                        </button>

                        <button className="card-top-button" onClick={() => {
                            setHide(true)
                            setTimeout(_ => props.handleDeleteCourse(props.id), 1000)
                        }}>
                            <FiTrash2 />
                        </button>

                    </div>
                }

                <div className="card-ies">
                    <strong >{props.IES}</strong>
                </div>

            </header>

            {/* Conteúdo do Cartão */}
            <div className="card-content">

                <div className="card-content-title">
                    <h5> {props.name} </h5>
                </div>
                <div className="card-content-text">
                    <p>{props.description}</p>
                </div>

            </div>

            {/* Rodapé do Cartão */}
            <footer className="card-bottom">

                <button className="a-link" onClick={infoOpen}>Saiba mais</button>

            </footer>

            <Modal open={edit} onClose={editClose}>
                <CourseForm title="Digite os novos dados" {...props}
                    onSubmit={(values) => {
                        props.handleEditCourse(values, props.id)
                    }} />
                <Alert />
            </Modal>

            <Modal open={info} onClose={infoClose}>
                <CardInfo {...props} />
            </Modal>

        </div>
    )
}

export default Card 