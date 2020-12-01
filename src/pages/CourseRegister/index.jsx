import React, { useState } from 'react'
import './styles.css'

import books from '../../assets/img/books.svg'

import { useHistory } from 'react-router-dom'

import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import CourseForm from '../../components/Form/Course'
import Alert from '../../components/Alert/Alert'

import { getError, removeEmptyData } from '../../utils/utils'

import api from '../../services/api'

const CourseRegister = _ => {

    // Instanciando e iniciando constantes
    const history = useHistory() // Permite fazer a navegação por JS
    const authorization = localStorage.getItem('authorization')

    // Setando os estados do alert
    const [open, setOpen] = useState(false)
    const [message, setMessage] = useState("")
    const [type, setType] = useState("info")

    // Criando as funções do Alert
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

    // Função responsável por Registrar o curso no banco
    const handleRegister = async data => {

        // Removendo campos vazios dos dados recebidos pelo formulário
        removeEmptyData(data)

        try {

            await api.post('/course', data, { headers: { authorization } })

            successAlertEnabled('Operação realizada com Sucesso!!')
            setTimeout(_ => history.push('/profile'), 2000) // Sair da página apos 2 segundos

        } catch (error) {

            errorAlertEnabled(getError(error))

        }
    }

    return (
        <div className='container'>

            <Header />

            <div className="content-column box">

                <h1 className="create-course-title">Cadastre um curso</h1>

                <div className="create-course-data">
                    <img className="create-course-img" src={books} alt="books"></img>
                    <CourseForm onSubmit={handleRegister} />
                </div>
            </div>

            <Footer />

            <Alert type={type} text={message} open={open} onClose={alertDisabled} />

        </div>
    )
}


export default CourseRegister