import React from 'react'
import './styles.css'

import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import UniversityForm from '../../components/Form/University'

const Register = _ =>
    <div className='register-container'>

        <Header />

        <div className="register-content box">
            <h1>Cadastre sua Universidade</h1>
            <UniversityForm />
        </div>

        <Footer />

    </div>

export default Register