import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Card from '../../components/Card/Card'

const Profile = _ =>

    <div className='profile-container'>

        <Header authenticated />

        <div className="profile-main box">

            <div className="profile-container-top">
                <span>Bem vindo, Inatel</span>
                <strong>Cursos cadastrados</strong>
                <Link className="btn btn-info" to="/course/create">Novo curso</Link>
            </div>

            <div className="profile-container-card">
                <div className="profile-list-card">
                    <Card />
        
                </div>
            </div>

        </div>

        <Footer />

    </div>


export default Profile