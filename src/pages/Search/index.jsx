import React from 'react'
import './styles.css'

import { Link } from 'react-router-dom'

import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

import student from '../../assets/img/students1.svg'

const Search = _ => {

    return (

        <div className='container'>

            <Header />

            <div className="content-column search-content">

                <div className="search-text">
                    <strong>Encontre o melhor curso</strong>
                    <p>Vamos ajudá-lo a encontrar os melhores cursos nas melhores universidades</p>
                </div>

                <section className="search-input">

                    <form className="search-form">

                        <input className="form-field" placeholder="Realize uma pesquisa" />

                        <select className="form-field" name="option">
                            <option value="name">Cursos</option>
                            <option value="ies">Faculdades</option>
                            <option value="city">Cidade</option>
                        </select>

                        <Link to="/result" className="button search-input-button">Pesquisar</Link>

                    </form>

                </section>
                <img className="search-img" src={student} alt="student"></img>
            </div>

            <Footer />

        </div>
    )
}
export default Search