import React, { useState, useEffect } from 'react'
import './styles.css'

import { Link, useHistory } from 'react-router-dom'

import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import CardsList from '../../components/CardsList/CardsList'
import Alert from '../../components/Alert/Alert'

import { universityFactory } from '../../utils/factory'
import { isAuthenticated } from '../../utils/auth'


import api from '../../services/api'

const Profile = _ => {

    // Instanciando e iniciando constantes
    const authorization = isAuthenticated() // Verificando se o usuário esta autentificado 
    const history = useHistory()

    // Declarando os estados
    const [university, setUniversity] = useState({})
    const [courses, setCourses] = useState([])
    const [empty, setEmpty] = useState(false)
    const [alert, setAlert] = useState(false) // Estado que irá definir se o alert está visível ou não

    // Declaração de funções
    const alertOpen = _ => setAlert(true)
    const alertClose = _ => setAlert(false)

    // Buscando os cursos e os setando no estado
    const fetchData = async _ => await api.get('profile', { headers: { authorization } })
        .then(response => {
            setCourses(response.data)

            if (!response.data.length)
                setEmpty(true)

        })

    // Usando o "useEffect" para carregar os dados da universidade e os setar no estado
    useEffect(_ => {

        // Trazendo os dados da universidade
        api.get('university', { headers: { authorization } })
            .then(response => {
                
                // Criando um objeto apenas com os dados necessários
                const universityObject = universityFactory(response.data)

                setUniversity(universityObject)

            })

        fetchData()

        // eslint-disable-next-line
    }, [authorization])

    // Função responsável por deletar cursos
    const handleDelete = async id => {

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
                            onClick={_ => history.push("/university/update", university)}>
                            Editar
                        </button>
                        <Link className="button button-create" to="/course/create">Novo curso</Link>

                    </div>
                </div>

                {!empty ?

                    <CardsList authenticated
                        courses={courses}
                        handleDelete={handleDelete} /> :

                    <div className="profile-empty">
                        <h2>Nenhum curso cadastrado!</h2>
                        <p>Crie um novo curso no botão <strong>Novo curso</strong></p>
                    </div>

                }

            </div>

            <Footer />

            {/* Componentes com posições não fixadas */}
            <Alert type="error" text="Erro!! Tente novamente" open={alert} onClose={alertClose} />

        </div>
    )
}


export default Profile