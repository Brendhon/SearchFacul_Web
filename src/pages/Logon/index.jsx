import React from 'react'
import './styles.css'

import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import logo from '../../assets/img/logo2.svg'

const Logon = _ =>
    <div className='container'>

        <Header />

        <div className='content-row logon-content'>

            <section className="logon-form">

                <form>

                    <h1>Faça seu Logon</h1>
                    <input style={{ marginBottom: 5 }} placeholder="Email" type="email" />
                    <input style={{ marginBottom: 10 }} placeholder="Senha" type="password" />
                    <button className="button" type="submit">Entrar</button>

                </form>

            </section>

            <img src={logo} alt="logo"></img>

        </div>

        <Footer />

    </div>


export default Logon