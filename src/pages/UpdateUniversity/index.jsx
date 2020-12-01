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

import { removeEmptyData } from '../../utils/utils'

const UpdateUniversity = props => {

    const authorization = localStorage.getItem('authorization')

    const history = useHistory()

    const [modal, setModal] = useState(false)
    const [bye, setBye] = useState(false)

    const modalOpen = _ => setModal(true)
    const modalClose = _ => setModal(false)

    // Pegando o objeto enviado via navegação
    const university = props.location.state

    const handleUpdateCourse = async data => {

        // Removendo os campos vazios do formulário
        delete data["confirmPassword"]
        removeEmptyData(data)

        try {
            await api.put('university', data, {
                headers: {
                    authorization
                }
            })
            history.push('/profile')
        } catch (error) {
            console.log(error.response)
        }
    }

    const handleDeleteCourse = async _ => {

        try {
            await api.delete('university', {
                headers: {
                    authorization
                }
            })

        } catch (error) {
            console.log(error)
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
                    onSubmit={handleUpdateCourse}
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
                                        await handleDeleteCourse()
                                        localStorage.clear() // Limpando o storage do navegador
                                        history.push('/')
                                    }, 3000)

                                }}>Sim</button>

                            <button className="button button-skip"
                                onClick={modalClose}>Não</button>

                        </div>

                    </div>
                }
            </Modal>

        </div>
    )
}
export default UpdateUniversity