import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Card from '../../components/Card/Card'

const Profile = _ =>

    <div className='profile-container'>

        <Header authenticated />

        <div className="profile-content box">

            <div className="profile-content-top">
                <span>Bem vindo, Inatel</span>
                <strong>Cursos cadastrados</strong>
                <Link className="btn btn-info" to="/course/create">Novo curso</Link>
            </div>

            <div className="profile-card">
                <div className="profile-list-card">
                    <Card />
        
                </div>
            </div>

        </div>

        <Footer />

    </div>


export default Profile