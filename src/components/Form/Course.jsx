import React from 'react'
import './Course.css'

const FormCourse = props =>

    <section className="course-container">

        {props.title ? <h1>{props.title}</h1> : <div />}

        <form>

            <input className="form-field name" placeholder="Nome do curso" />
            <input className="form-field duration" placeholder="Duração (anos)" />
            <input className="form-field score" placeholder="Nota MAC" />

            <textarea maxLength="450" className="form-textarea description" placeholder="Descrição (até 450 caracteres)" />

            <select className="form-field select-titration" name="titration">
                <option value="">Selecione a titulação</option>
                <option value="bacharelado">Bacharelado</option>
                <option value="licenciatura">Licenciatura</option>
            </select>

            <select className="form-field select-modality" name="modality">
                <option value="">Selecione a modalidade</option>
                <option value="presencial">Presencial</option>
                <option value="online">Online</option>
            </select>

            <button className="button" type="submit">Enviar</button>

        </form>

    </section>

export default FormCourse