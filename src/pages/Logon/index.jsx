import React from 'react'
import './styles.css'

import Header from '../../components/Header'
import logo from '../../assets/img/alternative.svg'

const Logon = _ =>
    <div className='logon-container'>
        <Header />
        <div className='content'>

            <section className="form">
                <form>
                    <h1>Faça seu Logon</h1>
                    <input className="mb-2" placeholder="Email" type="email" />
                    <input placeholder="Senha" type="password" />
                    <button className="button" type="submit">Entrar</button>
                </form>
            </section>

            <img src={logo} alt="logo"></img>
        </div>
    </div>


export default Logon