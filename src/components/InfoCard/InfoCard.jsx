import React from 'react'
import './InfoCard.css'

import { FiPhone, FiMail, FiClock, FiMap, FiMapPin } from 'react-icons/fi'
import { FaStar } from 'react-icons/fa'

const InfoCard = props =>

    <div className="info-container">

        {/* Cabeçalho do info */}
        <header className="info-top">

            <strong className="info-top-title">{props.ies}</strong>
            <p className="info-top-subtitle">{props.category}</p>

        </header>

        {/* Conteúdo do Cartão */}
        <div className="info-content">

            <h5 className="info-content-title"> {props.name}</h5>

            <div className="info-content-subtitle">

                <p>{props.titration}</p>

                <p>{props.modality}</p>

                <p>{props.period}</p>

                <p className="align-items"><FiClock className="info-content-data-icon" />{props.duration} anos</p>

                {/* Mostrar pontuação caso ela exista*/}
                {props.score ?
                    <p className="align-items">{props.score} <FaStar className="info-content-data-icon" /></p> :
                    <div />
                }

            </div>

            <p className="info-content-description">{props.description}</p>

            <div className="info-content-data">

                <fieldset className="info-content-data-contact">

                    <legend>Contato</legend>

                    <p className="align-items"><FiMail className="info-content-data-icon" /> {props.email}</p>
                    <p className="align-items"><FiPhone className="info-content-data-icon" /> {props.telephone}</p>

                </fieldset>

                <fieldset className="info-content-data-address">

                    <legend>Localização</legend>

                    <p className="align-items"><FiMap className="info-content-data-icon" />{props.city} - {props.uf}</p>
                    <p className="align-items"><FiMapPin className="info-content-data-icon" />{props.address}</p>

                </fieldset>

            </div>

        </div>

        {/* Rodapé do Cartão */}
        <footer className="info-bottom">


            {/* Se a universidade possuir um site cadastrado ele ira aparecer */}
            {props.site ?

                // eslint-disable-next-line 
                <a className="a-link" target="_blank"
                    style={{ fontSize: 17, fontWeight: 600 }}
                    href={props.site}>Entre no site para saber mais</a> :
                <div />
            }

        </footer>

    </div >

export default InfoCard 