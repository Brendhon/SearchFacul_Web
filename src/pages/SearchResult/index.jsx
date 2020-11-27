import React from 'react'
import './styles.css'

import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import CardsList from '../../components/CardsList/CardsList'


const SearchResult = _ => {

    return (

        <div className='container'>

            <Header />

            <div className="content-column box">

                    <div className="result-content-top">
                        <span>Bem vindo</span>
                        <span className="result-number">Total de resultados: 4</span>
                    </div>

                    <CardsList />
                </div>

                <Footer />

            </div>
    )
}

export default SearchResult