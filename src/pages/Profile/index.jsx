import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import './styles.css'

import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import CardsList from '../../components/CardsList/CardsList'
import Alert from '../../components/Alert/Alert'

import api from '../../services/api'

const Profile = _ => {

    // Verificando se o usuário esta autentificado 
    const authorization = localStorage.getItem('authorization')

    const history = useHistory()

    const [courses, setCourses] = useState([])
    const [alert, setAlert] = useState(false)

    // Declaração de funções
    const alertOpen = _ => setAlert(true)
    const alertClose = _ => setAlert(false)

    // Buscando os dados no perfil e passando o authorization
    const fetchData = async _ => await api.get('profile', { headers: { authorization } })
        .then(response => {
            setCourses(response.data)
        })

    // eslint-disable-next-line
    useEffect(_ => fetchData(), [authorization]) // Usando 'useEffect' para carregar os casos

    const handleDeleteCourse = async id => {

        try {
            await api.delete(`course/${id}`, {
                headers: {
                    authorization
                }
            })

            // Buscando os dados novamente
            fetchData()

        } catch (error) {
            alertOpen()
        }
    }

    return (
        <div className='container'>

            <Header />

            <div className="content-column box">

                <div className="profile-content-top">
                    <span>Bem vindo, Inatel</span>
                    <strong>Cursos cadastrados</strong>

                    <div className="profile-buttons">

                        <button className="button-outline button-delete"
                            onClick={_ => history.push("/university/update", {
                                IES: courses.IES,
                                telephone: courses.telephone,
                                email: courses.email,
                                uf: courses.uf,
                                city: courses.city,
                                address: courses.address,
                                site: courses.site,
                                category: courses.category
                            })}>
                            Editar
                        </button>
                        <Link className="button button-create" to="/course/create">Novo curso</Link>
                    </div>
                </div>

                <CardsList authenticated
                    courses={courses}
                    handleDeleteCourse={handleDeleteCourse} />

            </div>

            <Footer />

            {/* Componentes com posições não fixadas */}
            <Alert type="error" text="Erro!! Tente novamente" open={alert} onClose={alertClose} />

        </div>
    )
}


export default Profile