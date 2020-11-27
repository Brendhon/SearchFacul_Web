import React, { useState } from 'react'
import './styles.css'

import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Button from '../../components/Button/Button'

import student from '../../assets/img/logo.svg'

const Search = _ => {

    // Declaração de estados
    const [buttonName, setButtonName] = useState(false)
    const [buttonIes, setButtonIes] = useState(false)
    const [buttonCity, setButtonCity] = useState(false)

    // Declaração de funções
    const buttonNameActivated = _ => setButtonName(true)
    const buttonNameDisabled = _ => setButtonName(false)

    const buttonIesActivated = _ => setButtonIes(true)
    const buttonIesDisabled = _ => setButtonIes(false)

    const buttonCityActivated = _ => setButtonCity(true)
    const buttonCityDisabled = _ => setButtonCity(false)

    return (
        <div className='search-container'>

            <Header />

            <div className="search-content">

                <img className="search-img" src={student} alt="student"></img>

                <section>

                    <form className="search-form">
                        <input placeholder="Nome do curso" />
                    </form>


                    <div className="search-buttons">

                        <Button activated={buttonCity}
                            text="Cidade da faculdade"
                            deactivate={buttonCityDisabled}
                            activate={buttonCityActivated}></Button>

                        {console.log(buttonCity)}

                        <Button activated={buttonName}
                            text="Nome do Curso"
                            deactivate={buttonNameDisabled}
                            activate={buttonNameActivated}></Button>

                        <Button activated={buttonIes}
                            text="Nome da faculdade"
                            deactivate={buttonIesDisabled}
                            activate={buttonIesActivated}></Button>

                    </div>


                </section>

            </div>

            <Footer />

        </div>
    )
}
export default Search