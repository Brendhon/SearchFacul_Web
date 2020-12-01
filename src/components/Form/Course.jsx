import React from 'react'
import './Course.css'

import { Formik, Form, Field, ErrorMessage } from 'formik';

import { courseSchema, updateCourseSchema } from '../../utils/schemas'

const FormCourse = props => {

    const initialValues = {
        name: props.name || "",
        duration: props.duration || "",
        score: props.score || "",
        description: props.description || "",
        titration: props.titration || "",
        modality: props.modality || "",
    }

    return (

        <Formik initialValues={initialValues}
            validationSchema={props.authorization ? updateCourseSchema : courseSchema}
            onSubmit={props.onSubmit}>

            <section className="course-container" >

                {props.title ? <h1>{props.title}</h1> : <div />}

                <Form className="course-form">

                    <Field name="name"
                        className="form-field name"
                        placeholder="Nome do curso" />
                    <ErrorMessage className="form-error error-name" component="span" name="name" />

                    <Field name="duration"
                        className="form-field duration"
                        placeholder="Duração (anos)" />
                    <ErrorMessage className="form-error error-duration" component="span" name="duration" />

                    <Field name="score"
                        className="form-field score"
                        placeholder="Nota MAC" />
                    <ErrorMessage className="form-error error-score" component="span" name="score" />

                    <Field as="textarea"
                        name="description"
                        maxLength="450"
                        className="form-textarea description"
                        placeholder="Descrição (até 450 caracteres)" />
                    <ErrorMessage className="form-error error-description" component="span" name="description" />

                    <Field as="select"
                        className="form-field select-titration"
                        name="titration">

                        <option value="">Selecione a titulação</option>
                        <option value="Bacharelado">Bacharelado</option>
                        <option value="Licenciatura">Licenciatura</option>

                    </Field>
                    <ErrorMessage className="form-error error-titration" component="span" name="titration" />

                    <Field as="select"
                        className="form-field select-modality"
                        name="modality">

                        <option value="">Selecione a modalidade</option>
                        <option value="Presencial">Presencial</option>
                        <option value="Online">Online</option>

                    </Field>
                    <ErrorMessage className="form-error error-modality" component="span" name="modality" />

                    <button className="button" type="submit">Enviar</button>

                </Form>

            </section>

        </Formik>
    )
}

export default FormCourse