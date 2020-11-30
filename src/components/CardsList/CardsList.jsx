import React from 'react'
import './CardsList.css'

import Card from '../Card/Card'

const CardsList = props =>
    <div className="container-card-list">
        <div className="container-card-list-item">
            {props.courses.map(course => (
                <Card {...course} authenticated={props.authenticated ? true : false} />
            ))}
        </div>
    </div>

export default CardsList




