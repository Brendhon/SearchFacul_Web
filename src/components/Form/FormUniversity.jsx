import React from 'react'
import './FormUniversity.css'

const FormUniversity = props =>

    <div className='university-content'>

        <h1>{props.title}</h1>

        <section className="form">

            <form>

                <input className="IES" placeholder="IES" />
                <input className="telephone" placeholder="Telefone" type="tel" />
                <input className="email" placeholder="Email" type="email" />
                <input className="UF" placeholder="UF" />
                <input className="password" placeholder="Senha" />
                <input className="city" placeholder="Cidade" />
                <input className="confirmPassword" placeholder="Confirme sua senha" />
                <input className="address" placeholder="Endereço" />
                <input className="site" placeholder="Site" type="url" />

                <div className="radio">
                    <input className="private" type="radio" value="public" name="category" />Pública
                    <input className="public" type="radio" value="private" name="category" />Privada
                </div>

                <button className="button" type="submit">Enviar</button>

            </form>

        </section>

    </div>


export default FormUniversity