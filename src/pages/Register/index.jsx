import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import './styles.css'

import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import UniversityForm from '../../components/Form/University'
import Alert from '../../components/Alert/Alert'

import { getError, removeEmptyData } from '../../utils/utils'

import api from '../../services/api'

const Register = _ => {

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

    const handleRegister = async data => {

        //Removendo campos desnecessários
        delete data["confirmPassword"]
        removeEmptyData(data)

        try {
            await api.post('/university', data)
            successAlertEnabled('Cadastrado com sucesso!! Voce será redirecionado para a página de login') // Alerta de sucesso
            setTimeout(_ => history.push('/logon'), 4000) // Sair da página apos 4 segundos
        } catch (error) {
            errorAlertEnabled(getError(error)) // Mostrando um alert para o usuário de fracasso
        }
    }

    return (
        <div className='container'>

            <Header />

            <div className="content-column box register-content">
                <UniversityForm title="Cadastre sua Universidade" onSubmit={handleRegister} />
            </div>

            <Footer />

            {/* Componentes com posições não fixadas */}
            <Alert type={type} text={message} open={open} onClose={alertDisabled} />

        </div>)
}
export default Register