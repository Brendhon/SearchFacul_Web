import React from 'react'
import './CardsList.css'

import Card from '../Card/Card'

const CardsList = props =>
    <div className="container-card-list">
        <div className="container-card-list-item">
            <Card {...props} />
            <Card {...props} />
            <Card {...props} />
            <Card {...props} />
        </div>
    </div>

export default CardsList




