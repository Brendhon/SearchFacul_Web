import React, { useState } from 'react'
import './styles.css'

import { useHistory, useParams } from 'react-router-dom'

import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import CourseForm from '../../components/Form/Course'
import Alert from '../../components/Alert/Alert'

import { getError, removeEmptyData } from '../../utils/utils'

import api from '../../services/api'

const EditCourse = props => {

    // Instanciando e iniciando constantes
    const authorization = localStorage.getItem('authorization') // Pegando o token no storage do navegador
    const { id } = useParams() // Pegando o ID 
    const course = props.location.state // Pegando o objeto enviado via navegação
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

    // Função responsável por editar os dados
    const handleEdit = async data => {

        // Removendo atributos vazios
        removeEmptyData(data)

        try {

            await api.put(`course/${id}`, data, { headers: { authorization } })

            successAlertEnabled('Editado com sucesso!!')
            setTimeout(_ => history.goBack(), 2000) // Sair da página apos 2 segundos

        } catch (error) {

            errorAlertEnabled(getError(error))

        }

    }

    return (
        <div className='container'>

            <Header />

            <div className="content-column box">

                <h1 className="edit-course-title">Edite os dados de sua escolha</h1>

                <div className="edit-course-data">
                    <CourseForm
                        onSubmit={handleEdit}
                        authorization
                        {...course} />
                </div>

            </div>

            <Footer />

            <Alert type={type} text={message} open={open} onClose={alertDisabled} />

        </div>
    )
}


export default EditCourse