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

                <p>Bacharelado</p>

                <p>Presencial</p>

                <p className="align-items"><FiClock className="info-content-data-icon" />5 anos</p>

                <p className="align-items">5 <FaStar className="info-content-data-icon" /></p>

            </div>

            <p className="info-content-description">saddddddddsdadsasd asdmaskdma asdpasmdpasd dmamdapsmda adadpaomsdoas asdma´smdasmd asdasdoasdasdkams adksad asdaskdmas aoksdoasdk asdokpasdkam aksdaosd adkoaskd asdkpasdk asdokapsodk asdokpasdkpa aspdo odapsdka adokpadk adwokapwd wadoapdka dokapd adkaopwd awdokopawkda ddowkaopd awdokapwoodk awdokawp asjdoiasn asodkpaoskd asdpkoaoskd asodkpasodk askdopaskd asodkpasokd asokdpaoskdp sadkapdka asdokap asdasdas asdasd asdasd asdadsijasasdijoasd asdias</p>

            <div className="info-content-data">

                <fieldset className="info-content-data-contact">

                    <legend>Contato</legend>

                    <p className="align-items"><FiMail className="info-content-data-icon" /> guilherme@gmail.lo.br</p>
                    <p className="align-items"><FiPhone className="info-content-data-icon" /> 34546109</p>

                </fieldset>

                <fieldset className="info-content-data-address">

                    <legend>Localização</legend>

                    <p className="align-items"><FiMap className="info-content-data-icon" />Santa Rita - MG</p>
                    <p className="align-items"><FiMapPin className="info-content-data-icon" />Avenida Inatel, 12</p>

                </fieldset>

            </div>

        </div>

        {/* Rodapé do Cartão */}
        <footer className="info-bottom">

            {/* eslint-disable-next-line */}
            <a className="a-link" style={{ fontSize: 17, fontWeight: 600 }} target="_blank" href="https://inatel.br/home/">Entre no site para saber mais</a>

        </footer>

    </div>

export default CardInfo 