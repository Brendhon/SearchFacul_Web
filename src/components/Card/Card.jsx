import React from 'react'
import './Card.css'

const Card = _ =>

    <div className="card-container">

        <strong className="ies">Instituto Nacional de Telecomunicações</strong>

        <div className="body">

            <h5 className="title"> Engenharia de computação</h5>
            <p className="text">Some quick example text build on the card title and make up the bulk of the card's content.</p>

        </div>

        <div className="list">

            <div className="list-item">

                <div className="list-data">
                    <p><strong>Titulação</strong>: Bacharelado</p>
                </div>

                <div className="list-data">
                    <p><strong>Modalidade</strong>: Online</p>
                </div>

            </div>

            <div className="list-item">

                <div className="list-data">
                    <p><strong>Duração</strong>: 5 anos</p>
                </div>

                <div className="list-data">
                    <p><strong>Nota MEC</strong>: 5</p>
                </div>

            </div>

        </div>

    </div>

export default Card 