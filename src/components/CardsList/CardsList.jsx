import React from 'react'
import './CardsList.css'

import Card from '../Card/Card'

const CardsList = props =>
    <div className="container-card-list">
        <div className="container-card-list-item">
            {props.courses.map(course => (
                <Card key={course.id}
                    {...course}
                    authenticated={props.authenticated ? true : false}
                    handleDeleteCourse={props.handleDeleteCourse} />
            ))}
        </div>
    </div>

export default CardsList




