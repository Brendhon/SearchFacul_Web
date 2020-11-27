import React from 'react'
import './styles.css'

import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import UniversityForm from '../../components/Form/University'

const Register = _ =>
    <div className='container'>

        <Header />

        <div className="content-column box register-content">
            <UniversityForm title="Cadastre sua Universidade" />
        </div>

        <Footer />

    </div>

export default Register