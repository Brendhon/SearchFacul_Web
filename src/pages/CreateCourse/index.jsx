import React from 'react'
import './styles.css'

import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import CourseForm from '../../components/Form/Course'

import books from '../../assets/img/books.svg'

const CreateCourse = _ =>

    <div className='container'>

        <Header authenticated/>

        <div className="content-column box">

            <h1 className="create-course-title">Cadastre um curso</h1>

            <div className="create-course-data">
                <img className="create-course-img" src={books} alt="books"></img>
                <CourseForm/>
            </div>
        </div>

        <Footer />

    </div>


export default CreateCourse