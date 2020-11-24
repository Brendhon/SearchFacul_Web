import React from 'react'
import './styles.css'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

const Register = _ =>
    <div className='register-container'>

        <Header />

        <div className='content'>

            <h1>Cadastre sua Universidade</h1>

            <section className="form">

                <form>

                    <input className="IES" className="IES" placeholder="IES" />
                    <input className="telephone" placeholder="Telefone" type="tel" />
                    <input className="email" placeholder="Email" type="email" />
                    <input className="UF" placeholder="UF" />
                    <input className="password" placeholder="Senha" />
                    <input className="city" placeholder="Cidade" />
                    <input className="confirmPassword" placeholder="Confirme sua senha" />
                    <input className="address" placeholder="Endereço" />
                    <input className="site" placeholder="Site" type="url" />

                    <div className="radio">
                        <input className="private" type="radio" id="Privada" name="gender" />Pública
                        <input className="public" type="radio" id="Publica" name="gender" />Privada
                    </div>


                    <button className="button" type="submit">Entrar</button>

                </form>

            </section>
        </div>
        <Footer />
    </div>


export default Register