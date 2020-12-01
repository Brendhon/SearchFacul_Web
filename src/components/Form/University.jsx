import React from 'react'
import './University.css'

import { Formik, Form, Field, ErrorMessage } from 'formik';

import { universitySchema, updateUniversitySchema } from '../../utils/schemas'

const FormUniversity = props => {

    const initialValues = {
        IES: props.IES || "",
        telephone: props.telephone || "",
        email: props.email || "",
        uf: props.uf || "",
        password: props.password || "",
        confirmPassword: props.confirmPassword || "",
        city: props.city || "",
        address: props.address || "",
        site: props.site || "",
        category: props.category || "",
    }

    return (

        <Formik initialValues={initialValues}
            validationSchema={props.authorization ? updateUniversitySchema : universitySchema}
            onSubmit={props.onSubmit}>

            <section className="university-content">

                {props.title ? <h1>{props.title}</h1> : <div />}

                <Form className="university-form">

                    <Field className="form-field IES"
                        name="IES"
                        placeholder="IES" />
                    <ErrorMessage className="form-error error-ies" component="span" name="IES" />

                    <Field className="form-field email"
                        name="email"
                        placeholder="Email"
                        type="email" />
                    <ErrorMessage className="form-error error-email" component="span" name="email" />

                    <Field className="form-field password"
                        name="password"
                        placeholder={props.authorization  ? "Nova senha" : "Senha"}
                        type='password' />
                    <ErrorMessage className="form-error error-password" component="span" name="password" />

                    <Field className="form-field confirmPassword"
                        name="confirmPassword"
                        placeholder={props.authorization  ? "Confirme sua nova senha" : "Senha"}
                        type='password' />
                    <ErrorMessage className="form-error error-confirmPassword" component="span" name="confirmPassword" />

                    <Field className="form-field city"
                        name="city"
                        placeholder="Cidade" />
                    <ErrorMessage className="form-error error-city" component="span" name="city" />

                    <Field className="form-field telephone"
                        name="telephone"
                        placeholder="Telefone" />
                    <ErrorMessage className="form-error error-telephone" component="span" name="telephone" />

                    <Field className="form-field address"
                        name="address"
                        placeholder="Endereço" />
                    <ErrorMessage className="form-error error-address" component="span" name="address" />

                    <Field className="form-field UF"
                        name="uf"
                        placeholder="UF"
                        maxLength="2" />
                    <ErrorMessage className="form-error error-uf" component="span" name="uf" />

                    <Field className="form-field site"
                        name="site"
                        placeholder="Site" />
                    <ErrorMessage className="form-error error-site" component="span" name="site" />

                    <Field as="select"
                        className="form-field select-category"
                        name="category">

                        <option value="">Selecione uma categoria</option>
                        <option value="Privado">Privado</option>
                        <option value="Pública">Pública</option>
                    </Field>
                    <ErrorMessage className="form-error error-category" component="span" name="category" />

                    <button className="button" type="submit">Enviar</button>

                </Form>

            </section>

        </Formik>
    )

}
export default FormUniversity