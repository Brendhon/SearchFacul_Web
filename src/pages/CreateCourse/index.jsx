import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import './styles.css'

import books from '../../assets/img/books.svg'

import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import CourseForm from '../../components/Form/Course'
import Alert from '../../components/Alert/Alert'

import { getError, removeEmptyData } from '../../utils/utils'

import api from '../../services/api'

const CreateCourse = _ => {

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

    const handleRegisterCourse = async data => {

        //Removendo campos desnecessários
        removeEmptyData(data)

        try {
            await api.post('/course', data, {
                headers: {
                    Authorization: localStorage.getItem('authorization')
                }
            })

            successAlertEnabled('Cadastrado com sucesso!! Voce será redirecionado para a página de perfil') // Alerta de sucesso
            setTimeout(_ => history.push('/profile'), 3000) // Sair da página apos 4 segundos
            
        } catch (error) {
            errorAlertEnabled(getError(error)) // Mostrando um alert para o usuário de fracasso
        }
    }

    return (
        <div className='container'>

            <Header />

            <div className="content-column box">

                <h1 className="create-course-title">Cadastre um curso</h1>

                <div className="create-course-data">
                    <img className="create-course-img" src={books} alt="books"></img>
                    <CourseForm onSubmit={handleRegisterCourse} />
                </div>
            </div>

            <Alert type={type} text={message} open={open} onClose={alertDisabled} />

            <Footer />

        </div>
    )
}


export default CreateCourse