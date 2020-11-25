import React from 'react'
import './Card.css'

const Card = _ =>

    <div className="card-container">

        <strong className="card-ies">Instituto Nacional de Telecomunicações</strong>

        <div className="card-content">

            <h5 className="card-content-title"> Engenharia de computação</h5>
            <p className="card-content-text">Some quick example text build on the card title and make up the bulk of the card's content.</p>

        </div>

        <div className="card-list-data">

            <div className="card-list-item">
                <p><strong>Titulação</strong>: Bacharelado</p>
                <p><strong>Modalidade</strong>: Online</p>
            </div>

            <div className="card-list-item">
                <p><strong>Duração</strong>: 5 anos</p>
                <p><strong>Nota MEC</strong>: 5</p>
            </div>

        </div>

    </div>

export default Card 