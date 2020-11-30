import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import CardsList from '../../components/CardsList/CardsList'

import api from '../../services/api'

const Profile = _ => {

    // Verificando se o usuário esta autentificado 
    const authorization = localStorage.getItem('authorization')

    const [courses, setCourses] = useState([])

    // Usando 'useEffect' para carregar os casos 
    useEffect(_ => {

        // Realizando um Get no profile e enviando o authorization no header
        api.get('profile',
            {
                headers: {
                    authorization
                }

            }).then(response => {
                setCourses(response.data)
            })

    }, [authorization]) // O useEffect só sera chamado novamente se o authorization mudar

    return (
        <div className='container'>

            <Header />

            <div className="content-column box">

                <div className="profile-content-top">
                    <span>Bem vindo, Inatel</span>
                    <strong>Cursos cadastrados</strong>
                    <Link className="button" to="/course/create">Novo curso</Link>
                </div>

                {courses[0] ? <CardsList authenticated courses={courses} /> :
                
                    <div className="container-card-empty">
                        <strong>Nenhum curso cadastrado</strong>
                        <p>Cadastre seu primeiro curso no botão "Novo curso"</p>
                    </div>
                }


            </div>

            <Footer />

        </div>
    )
}


export default Profile