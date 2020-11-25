import React, { useState } from 'react'
import './Card.css'

import { FiTrash2, FiEdit } from 'react-icons/fi'
import Alert from '@material-ui/lab/Alert'

const Card = props => {

    const [visible, setVisible] = useState("alert-visible-false")

    return (
        <div className="card-container">

            <header className="card-top">

                {!props.authenticated ? <div style={{ margin: 10 }} /> :

                    <div className="card-top-authenticated">
                        <button className="card-top-button"><FiEdit /></button>
                        <button className="card-top-button" onClick={() => setVisible("alert-visible-true")}><FiTrash2 /></button>
                    </div>
                }

                <div className="card-ies">
                    <strong >Instituto Nacional de Telecomunicações</strong>
                </div>

            </header>

            <div className="card-content">

                <h5 className="card-content-title"> Engenharia de computação</h5>
                <p className="card-content-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque justo nulla, volutpat in sollicitudin vitae, sollicitudin eget risus. Nulla facilisi. Suspendisse congue, quam eu pharetra convallis, purus lacus malesuada purus, vitae blandit turpis nunc ac nisi. Suspendisse vitae iaculis orci, sed venenatis odio. Integer eget dui et felis ullamcorper laoreet. Integer egestas aliquam egestas. Etiam vitae eleifend metus. Nulla porta lorem eu diam lacinia, nec sollicitudin tellus sodales. Donec eros risus, ultrices eget urna in, gravida semper urna. Pellentesque eleifend mi at felis tempus rutrum. Nullam nulla felis, semper quis convallis elementum, finibus fringilla libero. Nunc sodales, massa id fermentum interdum, nibh tellus aliquam ligula, vel maximus lectus turpis vitae metus.</p>

            </div>

            <footer className="card-bottom">
                <a href="/profile">Saiba mais</a>
            </footer>

            <div className={visible}>
                <Alert onClose={() => setVisible("alert-visible-false")}>Sucesso ao deletar</Alert>
            </div>

        </div>
    )
}

export default Card 