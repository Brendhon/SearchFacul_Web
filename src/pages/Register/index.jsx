import React from 'react'
import './styles.css'

import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import FormUniversity from '../../components/Form/FormUniversity'

const Register = _ =>
    <div className='register-container'>
        <Header />
        <FormUniversity title="Cadastre sua Universidade" />
        <Footer />
    </div>

export default Register