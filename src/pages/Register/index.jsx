import React, { useState } from 'react'
import './styles.css'

import { useHistory } from 'react-router-dom'

import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import UniversityForm from '../../components/Form/University'
import Alert from '../../components/Alert/Alert'

import { getError, removeEmptyData } from '../../utils/utils'

import api from '../../services/api'

const Register = _ => {

    // Instanciando e iniciando constantes
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

    // Função responsável por enviar os dados ao banco
    const handleRegister = async data => {

        //Removendo campos desnecessários
        delete data["confirmPassword"]
        removeEmptyData(data)

        try {

            await api.post('/university', data)

            successAlertEnabled('Cadastrado com sucesso!!')
            setTimeout(_ => history.push('/logon'), 2000) // Sair da página apos 2 segundos

        } catch (error) {

            errorAlertEnabled(getError(error))

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

        </div>
    )
}
export default Register