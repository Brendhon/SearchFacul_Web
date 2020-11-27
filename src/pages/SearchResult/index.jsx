import React from 'react'
import './styles.css'

import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

const SearchResult = _ => {

    return (

        <div className='result-container'>

            <Header />

            <div className="result-content">
                <CardsList />
            </div>

            <Footer />

        </div>
    )
}

export default SearchResult