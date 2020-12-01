import React, { useState } from 'react'
import './styles.css'

import imgBye from '../../assets/img/bye.gif'

import { useHistory } from 'react-router-dom'
import Fade from '@material-ui/core/Fade'

import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import UniversityForm from '../../components/Form/University'
import Alert from '../../components/Alert/Alert'
import Modal from '../../components/Modal/Modal'

import api from '../../services/api'

import { removeEmptyData, getError } from '../../utils/utils'

const UpdateUniversity = props => {

    // Instanciando e iniciando constantes
    const authorization = localStorage.getItem('authorization')
    const university = props.location.state // Pegando o objeto enviado via navegação
    const history = useHistory()

    // Setando os estados do modal
    const [modal, setModal] = useState(false)
    const [bye, setBye] = useState(false)

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

    // Setando funções do Modal
    const modalOpen = _ => setModal(true)
    const modalClose = _ => setModal(false)

    // Função que irá atualizar os dados da universidade
    const handleUpdate = async data => {

        // Removendo os campos vazios do formulário
        delete data["confirmPassword"]
        removeEmptyData(data)

        try {

            await api.put('university', data, { headers: { authorization } })

            successAlertEnabled('Operação realizada com Sucesso!!')
            setTimeout(_ => history.push('/profile'), 2000) // Sair da página apos 4 segundos

        } catch (error) {

            errorAlertEnabled(getError(error)) // Mostrando um alert para o usuário de fracasso

        }

    }

    // Função que irá deletar a universidade
    const handleDelete = async _ => {

        try {

            await api.delete('university', { headers: { authorization } })

        } catch (error) {

            errorAlertEnabled(getError(error)) // Mostrando um alert para o usuário de fracasso

        }
        
    }

    return (
        <div className='container'>

            <Header />

            <div className="content-column box update-content">


                <div className="content-delete">
                    <button className="button button-delete" onClick={modalOpen}>Cancelar inscrição</button>
                </div>

                <h1 className="update-title">Edite os dados de sua escolha</h1>

                <UniversityForm
                    onSubmit={handleUpdate}
                    authorization
                    {...university} />

            </div>

            <Footer />

            <Modal open={modal} onClose={modalClose}>

                {bye ?
                    <Fade in={bye}>
                        <div className="container-column box"
                            style={{ backgroundColor: "white", padding: 15, width: 340 }}>
                            <h1>Bye</h1>
                            <img src={imgBye} width="300" alt="Adeus" />
                        </div>
                    </Fade>

                    :

                    <div className="container-column box"
                        style={{ backgroundColor: "white", padding: 15 }}>

                        <div className="modal-delete-message">
                            <h1>Tem certeza? </h1>
                            <p>Ao optar por sim, todos os seus dados e
                                cursos serão excluídos e não será possível a recuperação dos mesmos</p>
                        </div>

                        <div className="modal-delete-buttons">

                            <button className="button button-confirm"
                                onClick={() => {
                                    
                                    setBye(true)

                                    setTimeout(async _ => {
                                        await handleDelete() // Apagando os dados da universidade no sistema
                                        localStorage.clear() // Limpando o storage do navegador
                                        history.push('/') // O redirecionando para a página inicial
                                    }, 3000)

                                }}>Sim</button>

                            <button className="button button-skip"
                                onClick={modalClose}>Não</button>

                        </div>

                    </div>
                }
            </Modal>

            {/* Componentes com posições não fixadas */}
            <Alert type={type} text={message} open={open} onClose={alertDisabled} />

        </div>
    )
}
export default UpdateUniversity