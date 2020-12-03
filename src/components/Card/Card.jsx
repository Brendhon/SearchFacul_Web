import React, { useState } from 'react'
import './Card.css'

import { FiTrash2, FiEdit } from 'react-icons/fi'
import { useHistory } from 'react-router-dom'

import Modal from '../Modal/Modal'
import InfoCard from '../InfoCard/InfoCard'

import { courseFactory } from '../../utils/factory'

const Card = props => {

    // Instanciando e iniciando constantes
    const history = useHistory() // Permite fazer a navegação por JS

    // Declarando os estados de controle do modal e animação ao deletar
    const [info, setInfo] = useState(false)
    const [hide, setHide] = useState(false)

    const infoOpen = _ => setInfo(true)
    const infoClose = _ => setInfo(false)

    return (

        // Renderização condicional para fazer o efeito ao apagar 
        <div className={hide ? "card-container card-container-hide" : "card-container"}>

            {/* Cabeçalho do Card */}
            <header className="card-top">

                {/* Verificar se o usuário esta autentificado */}
                {!props.authenticated ? <div style={{ margin: 10 }} /> :

                    <div className="card-top-authenticated">

                        <button className="card-top-button"
                            onClick={_ => {
                                const courseObject = courseFactory(props)
                                history.push(`/course/update/${props.id}`, courseObject)
                            }}>
                            <FiEdit />
                        </button>

                        <button className="card-top-button"
                            onClick={() => {
                                setHide(true)
                                setTimeout(_ => props.handleDelete(props.id), 300)
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

            {/* Conteúdo não visível */}
            <Modal open={info} onClose={infoClose}>
                <InfoCard {...props} />
            </Modal>

        </div>
    )
}

export default Card 