import React from 'react'
import './styles.css'

import student from '../../assets/img/students1.svg'

import { useHistory } from 'react-router-dom'
import { Formik, Form, Field, ErrorMessage } from 'formik'

import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

import { searchSchema } from '../../utils/schemas'

const Search = _ => {

    // Definindo os valores padrões
    const initialValues = {
        search: "",
        option: "name",
    }

    const history = useHistory()

    return (

        <div className='container'>

            <Header />

            <div className="content-column search-content">

                <div className="search-text">
                    <strong>Encontre o melhor curso</strong>
                    <p>Vamos ajudá-lo a encontrar os melhores cursos nas melhores universidades</p>
                </div>

                <Formik initialValues={initialValues}
                validationSchema={searchSchema}
                onSubmit={(data) => history.push('/result', {
                    option: data.option,
                    text: data.search
                })}>

                    <section className="search-input">

                        <Form className="search-form">

                            <ErrorMessage className="form-error form-error-text" component="span" name="search" />
                            <Field name="search"
                                className="form-field form-text"
                                placeholder="Realize uma pesquisa" />

                            <Field as="select"
                                name="option"
                                className="form-field form-option" >

                                <option value="name">Cursos</option>
                                <option value="ies">Faculdades</option>
                                <option value="city">Cidade</option>

                            </Field>

                            <button className="button search-input-button" type="submit">Pesquisar</button>

                        </Form>

                    </section>

                </Formik>


                <img className="search-img" src={student} alt="student" width="300px" ></img>
            </div>

            <Footer />

        </div>
    )
}
export default Search