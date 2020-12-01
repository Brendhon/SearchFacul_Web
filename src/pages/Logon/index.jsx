import React, { useState } from 'react'
import './styles.css'

import logo from '../../assets/img/logo2.svg'

import { Formik, Form, Field, ErrorMessage } from 'formik'
import { useHistory } from 'react-router-dom'

import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Alert from '../../components/Alert/Alert'

import { loginSchema } from '../../utils/schemas'
import { getError } from '../../utils/utils'

import api from '../../services/api'

const Logon = _ => {

    // Instanciando e iniciando constantes
    const history = useHistory()

    // Criando valores iniciais para o formulário
    const initialValues = {
        email: "",
        password: ""
    }

    // Setando os estados do alert
    const [open, setOpen] = useState(false)
    const [message, setMessage] = useState("")

    // Setando funções do Alert
    const alertDisabled = _ => setOpen(false)
    const errorAlertEnabled = message => {
        setMessage(message)
        setOpen(true)
    }

    // Função responsável criar uma sessão
    const handleLogin = async data => {

        try {

            const response = await api.post('session', data)

            // Salvando no storage do navegador o token da resposta do banco de dados
            localStorage.setItem('authorization', response.data.token)

            history.push('/profile') // Indo para a página profile

        } catch (error) {

            errorAlertEnabled(getError(error))

        }
    }

    return (

        <div className='container'>

            <Header />

            <div className='content-row logon-content'>

                <Formik className="logon-form"
                    initialValues={initialValues}
                    validationSchema={loginSchema}
                    onSubmit={handleLogin}>

                    <Form className="logon-form-content">

                        <h1 className="logon-title">Faça seu Logon</h1>

                        <Field className="form-field logon-input"
                            placeholder="Email"
                            name="email"
                            type="email" />
                        <ErrorMessage className="form-error" component="span" name="email" />

                        <Field className="form-field logon-input"
                            placeholder="Senha"
                            name="password"
                            type="password" />
                        <ErrorMessage className="form-error" component="span" name="password" />

                        <button className="button logon-button" type="submit">Entrar</button>

                    </Form>

                </Formik>

                <img src={logo} alt="logo"></img>

            </div>

            <Footer />

            {/* Componentes com posições não fixadas */}
            <Alert type="error" text={message} open={open} onClose={alertDisabled} />

        </div>
    )
}


export default Logon