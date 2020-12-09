import React, { useState, useEffect } from 'react'
import './styles.css'

import { Link } from 'react-router-dom'
import { FaArrowLeft } from "react-icons/fa"

import emptyImg from '../../assets/img/empty.gif'

import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import CardsList from '../../components/CardsList/CardsList'

import api from '../../services/api'

const SearchResult = props => {

    // Declarando o estado que irá armazenar o resultado da pesquisa
    const [courses, setCourses] = useState([])
    const [empty, setEmpty] = useState(false)
    const [total, setTotal] = useState(0)

    // Lendo os dados passados pela navegação
    const { option, text } = props.location.state // Pegando o objeto enviado via navegação

    useEffect(_ => {

        try {
            api.get(`course/search/${option}?text=${text}`)
                .then(response => {

                    setCourses(response.data)
                    setTotal(response.data.length)

                    if (!response.data.length) {
                        setEmpty(true)
                    }

                })

        } catch (error) {
            console.log(error.response)
        }

        // eslint-disable-next-line
    }, [total])

    return (

        <div className='container'>

            <Header />

            <div className="content-column box">

                <div className="result-content-top">
                    <span>Bem vindo</span>
                    <span className="result-number">Total de resultados: {total}</span>
                </div>

                {!empty ? <CardsList courses={courses} /> :

                    <div className="result-empty fadeIn">
                        <img src={emptyImg} width="200" alt="vazio" />
                        <strong> Sem resultados!!</strong>
                        <p> Tente realizar outra pesquisa</p>
                        <Link to="/" className="button empty-button">
                            <FaArrowLeft style={{ marginRight: 8 }} />Voltar
                            </Link>
                    </div>
                }
            </div>

            <Footer />

        </div>
    )
}

export default SearchResult