import React from 'react'
import './styles.css'

import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import CourseForm from '../../components/Form/Course'

const CreateCourse = _ =>

    <div className='create-course-container'>

        <Header />
        <CourseForm title="Cadastre um curso" />
        <Footer/>

    </div>


export default CreateCourse