import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Card from '../../components/Card/Card'

const Profile = _ =>

    <div className='profile-container'>

        <Header authenticated/>

        <div className="container">
            <span >Bem vindo, Inatel</span>
            <Link className="btn btn-info" to="/course/create">Novo curso</Link>
        </div>


        <Card />
        <Footer />

    </div>


export default Profile