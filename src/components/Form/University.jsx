import React, { useState } from 'react'
import './University.css'

import Alert from '../Alert/Alert'
import { filter, match, getError } from '../../utils/utils'

import api from '../../services/api'

const FormUniversity = props => {

    // Declaração dos estados
    const [ies, setIes] = useState(props.IES || "")
    const [telephone, setTelephone] = useState(props.telephone || "")
    const [email, setEmail] = useState(props.email || "")
    const [uf, setUf] = useState(props.uf || "")
    const [password, setPassword] = useState(props.password || "")
    const [confirmPassword, setConfirmPassword] = useState(props.confirmPassword || "")
    const [city, setCity] = useState(props.city || "")
    const [address, setAddress] = useState(props.address || "")
    const [site, setSite] = useState(props.site || "")
    const [category, setCategory] = useState(props.category || "")

    // Setando os estados do alert
    const [open, setOpen] = useState(false)
    const [message, setMessage] = useState("")
    const [type, setType] = useState("info")

    //Declaração de funções
    const addIesContent = event => setIes(event.target.value)
    const addTelephoneContent = event => setTelephone(event.target.value)
    const addEmailContent = event => setEmail(event.target.value)
    const addUfContent = event => setUf(event.target.value)
    const addPasswordContent = event => setPassword(event.target.value)
    const addConfirmPasswordContent = event => setConfirmPassword(event.target.value)
    const addCityContent = event => setCity(event.target.value)
    const addAddressContent = event => setAddress(event.target.value)
    const addSiteContent = event => setSite(event.target.value)
    const addCategoryContent = event => setCategory(event.target.value)

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

    // Função que enviara os dados para o banco 
    const handleRegister = async event => {

        event.preventDefault() // Evitar que a página seja recarregada

        // Setando os dados que serão enviados
        const data = {
            IES: ies,
            telephone,
            email,
            password,
            uf: uf.toUpperCase(),
            city,
            address,
            category,
            site
        }

        if (match(password, confirmPassword)) {

            try {

                // Removendo os dados vazios
                filter(data)

                // Enviando os dados para o banco
                await api.post('university', data)

                successAlertEnabled("Cadastro realizado com sucesso") // Chamar alerta de sucesso

            } catch (error) {
                errorAlertEnabled(getError(error)) // Chamar alerta de Erro
            }

        }
        else {
            errorAlertEnabled("Senhas não batem") // Chamar alerta de Erro
        }

    }

    return (
        <section className="university-content">

            {props.title ? <h1>{props.title}</h1> : <div />}

            <form onSubmit={handleRegister}>

                <input className="form-field IES"
                    required=" "
                    placeholder="IES"
                    value={ies}
                    onChange={addIesContent}
                />

                <input className="form-field email"
                    required=" "
                    placeholder="Email"
                    value={email}
                    onChange={addEmailContent}
                    type="email" />

                <input className="form-field password"
                    required=" "
                    placeholder="Senha"
                    value={password}
                    onChange={addPasswordContent}
                    type={props.token ? 'text' : 'password'} />

                <input className="form-field confirmPassword"
                    required=" "
                    placeholder="Confirme sua senha"
                    value={confirmPassword}
                    onChange={addConfirmPasswordContent}
                    type={props.token ? 'text' : 'password'} />

                <input className="form-field city"
                    required=" "
                    placeholder="Cidade"
                    value={city}
                    onChange={addCityContent}
                />

                <input className="form-field telephone"
                    required=" "
                    placeholder="Telefone"
                    value={telephone}
                    onChange={addTelephoneContent}
                    pattern="\d{8,11}"
                    title="Deve conter apenas números"
                    type="tel" />

                <input className="form-field address"
                    required=" "
                    placeholder="Endereço"
                    value={address}
                    onChange={addAddressContent}
                />

                <input className="form-field UF"
                    required=" "
                    placeholder="UF"
                    value={uf}
                    onChange={addUfContent}
                    maxLength="2"
                    pattern="\w{2}"
                    title="Apenas letras"
                />

                <input className="form-field site"
                    placeholder="Site"
                    value={site}
                    onChange={addSiteContent}
                    type="url"
                    title="https://exemplo.br/"
                />

                <div className="radio">

                    <input className="form-field public"
                        checked={category === "Pública" ? true : false}
                        type="radio"
                        value="Pública"
                        name="category"
                        onChange={addCategoryContent} />Pública

                    <input className="form-field private"
                        checked={category === "Privada" ? true : false}
                        type="radio"
                        value="Privada"
                        name="category"
                        onChange={addCategoryContent} />Privada

                </div>

                <button className="button" type="submit">Enviar</button>

            </form>

            {/* Componentes com posições não fixadas */}
            <Alert type={type} text={message} open={open} onClose={alertDisabled} />

        </section>


    )

}
export default FormUniversity