import React from 'react'
import './CardInfo.css'

import { FiPhone, FiMail, FiClock, FiMap, FiMapPin } from 'react-icons/fi'
import { FaStar } from 'react-icons/fa'

const CardInfo = props =>

    <div className="info-container">

        {/* Cabeçalho do info */}
        <header className="info-top">

            <strong className="info-top-title">Instituto Nacional de Telecomunicações</strong>
            <p className="info-top-subtitle">Particular</p>

        </header>

        {/* Conteúdo do Cartão */}
        <div className="info-content">

            <h5 className="info-content-title"> Engenharia de computação</h5>

            <div className="info-content-subtitle">

                <p className="info-content-data-titration" >Bacharelado</p>

                <p className="info-content-data-modality">Presencial</p>

                <p className="info-content-data-duration"><strong className="info-content-data-icon"><FiClock />
                </strong>5 anos</p>

                <p className="info-content-data-score">5 <strong className="info-content-data-icon"><FaStar />
                </strong></p>

            </div>

            <p className="info-content-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque justo nulla, volutpat in sollicitudin vitae, sollicitudin eget risus. Nulla facilisi. Suspendisse congue, quam eu pharetra convallis, purus lacus malesuada purus, vitae blandit turpis nunc ac nisi. Suspendisse vitae iaculis orci, sed venenatis odio. Integer eget dui et felis ullamcorper laoreet. Integer egestas aliquam egestas. Etiam vitae eleifend metus. Nulla porta lorem eu diam lacinia, nec sollicitudin tellus sodales. Donec eros risus, ultrices eget urna in, gravida semper urna. Pellentesque eleifend mi at felis tempus rutrum. Nullam nulla felis, semper quis convallis elementum, finibus fringilla libero. Nunc sodales, massa id fermentum interdum, nibh tellus aliquam ligula, vel maximus lectus turpis vitae metus.</p>

            <div className="info-content-data">

                <fieldset className="info-content-data-contact">

                    <legend>Contato</legend>

                    <p><strong className="info-content-data-icon"><FiMail /></strong>guilherme@gmail.lo.br</p>
                    <p><strong className="info-content-data-icon"><FiPhone /></strong>34546109</p>

                </fieldset>

                <fieldset className="info-content-data-address">

                    <legend>Localização</legend>

                    <p><strong className="info-content-data-icon"><FiMap /></strong>Santa Rita - MG</p>
                    <p><strong className="info-content-data-icon"><FiMapPin /></strong>Avenida Inatel, 12</p>

                </fieldset>

            </div>

        </div>

        {/* Rodapé do Cartão */}
        <footer className="info-bottom">

            {/* eslint-disable-next-line */}
            <a target="_blank" href="https://inatel.br/home/">Entre no site para saber mais!</a>

        </footer>

    </div>

export default CardInfo 