import React, { useState, useEffect } from 'react'
import './styles.css'

import { Link, useHistory } from 'react-router-dom'

import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import CardsList from '../../components/CardsList/CardsList'
import Alert from '../../components/Alert/Alert'

import api from '../../services/api'

const Profile = _ => {

    // Instanciando e iniciando constantes
    const authorization = localStorage.getItem('authorization') // Verificando se o usuário esta autentificado 
    const history = useHistory()

    // Declarando os estados
    const [university, setUniversity] = useState({})
    const [courses, setCourses] = useState([])
    const [alert, setAlert] = useState(false) // Estado que irá definir se o alert está visível ou não

    // Declaração de funções
    const alertOpen = _ => setAlert(true)
    const alertClose = _ => setAlert(false)

    // Buscando os cursos e os setando no estado
    const fetchData = async _ => await api.get('profile', { headers: { authorization } })
        .then(response => {
            setCourses(response.data)
        })

    // Usando o "useEffect" para carregar os dados da universidade e os setar no estado
    useEffect(_ => {

        // Trazendo os dados da universidade
        api.get('university', { headers: { authorization } })
            .then(response => {
                setUniversity(response.data)
            })

        fetchData()

        // eslint-disable-next-line
    }, [authorization])

    // Função responsável por deletar cursos
    const handleDeleteCourse = async id => {

        try {

            await api.delete(`course/${id}`, { headers: { authorization } })

            // Buscando os dados novamente
            fetchData()

        } catch (error) {

            alertOpen() // Mostrando mensagem de erro

        }
    }

    return (

        <div className='container'>

            <Header />

            <div className="content-column box">

                <div className="profile-content-top">
                    <span>Bem vindo </span>
                    <strong>Cursos cadastrados</strong>

                    <div className="profile-buttons">

                        <button className="button-outline button-delete"
                            onClick={_ => history.push("/university/update", {
                                IES: university.IES,
                                telephone: university.telephone,
                                email: university.email,
                                uf: university.uf,
                                city: university.city,
                                address: university.address,
                                site: university.site,
                                category: university.category
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