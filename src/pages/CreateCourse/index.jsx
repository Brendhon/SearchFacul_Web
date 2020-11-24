import React from 'react'
import './styles.css'

import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import FormCourse from '../../components/Form/FormCourse'

const CreateCourse = _ =>

    <div className='create-course-container'>

        <Header />
        <FormCourse title="Cadastre um curso" />
        <Footer/>

    </div>


export default CreateCourse