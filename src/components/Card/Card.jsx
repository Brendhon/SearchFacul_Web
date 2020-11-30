import React, { useState } from 'react'
import './Card.css'

import { FiTrash2, FiEdit } from 'react-icons/fi'
import { useHistory } from 'react-router-dom'

import Modal from '../Modal/Modal'
import CardInfo from '../CardInfo/CardInfo'

const Card = props => {

    const [info, setInfo] = useState(false)
    const [hide, setHide] = useState(false)

    const infoOpen = _ => setInfo(true)
    const infoClose = _ => setInfo(false)

    const history = useHistory() // Permite fazer a navegação por JS

    return (
        <div className={hide ? "card-container card-container-hide" : "card-container"}>

            {/* Cabeçalho do Card */}
            <header className="card-top">

                {!props.authenticated ? <div style={{ margin: 10 }} /> :

                    <div className="card-top-authenticated">

                        <button className="card-top-button"
                            onClick={_ => history.push(`/course/update/${props.id}`, {
                                id: props.id,
                                name: props.name,
                                description: props.description,
                                duration: props.duration,
                                titration: props.titration,
                                modality: props.modality,
                                score: props.score
                            })}>
                            <FiEdit />
                        </button>

                        <button className="card-top-button"
                            onClick={() => {
                                setHide(true)
                                setTimeout(_ => props.handleDeleteCourse(props.id), 300)
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

            <Modal open={info} onClose={infoClose}>
                <CardInfo {...props} />
            </Modal>

        </div>
    )
}

export default Card 