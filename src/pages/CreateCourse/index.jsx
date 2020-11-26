import React from 'react'
import './styles.css'

import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import CourseForm from '../../components/Form/Course'

import student from '../../assets/img/students2.svg'

const CreateCourse = _ =>

    <div className='create-course-container'>

        <Header />

        <div className="create-course-content box">
            <h1>Cadastre um curso</h1>

            <div className="create-course-data">
                <img className="create-course-img" src={student} alt="student"></img>
                <CourseForm/>
            </div>
        </div>

        <Footer />

    </div>


export default CreateCourse