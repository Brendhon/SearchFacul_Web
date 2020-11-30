import React, { useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import './styles.css'

import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import CourseForm from '../../components/Form/Course'
import Alert from '../../components/Alert/Alert'

import { getError } from '../../utils/utils'

import api from '../../services/api'

const EditCourse = props => {

    // Pegando o token no storage do navegador
    const authorization = localStorage.getItem('authorization')

    const { id } = useParams()

    // Pegando o objeto enviado via navegação
    const course = props.location.state

    const history = useHistory() // Permite fazer a navegação por JS

    // Setando os estados do alert
    const [open, setOpen] = useState(false)
    const [message, setMessage] = useState("")
    const [type, setType] = useState("info")

    // Setando funções do Alert
    const alertDisabled = _ => setOpen(false)
    const errorAlertEnabled = message => {
        setMessage(message)
        setType("error")
        setOpen(true)
    }
    const successAlertEnabled = message => {
        setMessage(message)
        setType("success")
        setOpen(true)
    }

    const handleEdit = async data => {

        try {
            await api.put(`course/${id}`, data, {
                headers: {
                    authorization
                }
            })

            successAlertEnabled('Editado com sucesso!!') // Alerta de sucesso
            setTimeout(_ => history.push('/profile'), 3000) // Sair da página apos 3 segundos
            
        } catch (error) {
            errorAlertEnabled(getError(error)) // Mostrando um alert para o usuário de fracasso
            console.log(error.response)
        }
    }

    return (
        <div className='container'>

            <Header />

            <div className="content-column box">

                <h1 className="edit-course-title">Edite os dados de sua escolha</h1>

                <div className="edit-course-data">
                    <CourseForm onSubmit={handleEdit} {...course} />
                </div>

            </div>

            <Alert type={type} text={message} open={open} onClose={alertDisabled} />

            <Footer />

        </div>
    )
}


export default EditCourse