import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import './styles.css'

import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import UniversityForm from '../../components/Form/University'
import Alert from '../../components/Alert/Alert'

const Register = _ => {

    const handleUpdateCourse = _ => alert('sucesso')

    return (
        <div className='container'>

            <Header />

            <div className="content-column box register-content">
                <h1 className="create-course-title">Edite os dados de sua escolha</h1>
                <UniversityForm onSubmit={handleUpdateCourse} />
            </div>

            <Footer />

        </div>)
}
export default Register