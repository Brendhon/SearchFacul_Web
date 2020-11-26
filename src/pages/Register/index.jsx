import React from 'react'
import './styles.css'

import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import UniversityForm from '../../components/Form/University'

const Register = _ =>
    <div className='register-container'>

        <Header />

        <div className="register-content box">
            <UniversityForm title="Cadastre sua Universidade" />
        </div>

        <Footer />

    </div>

export default Register