import React from 'react'
import './CardsList.css'

import Card from '../Card/Card'

import Fade from '@material-ui/core/Fade'

const CardsList = props =>
    <Fade in={true} style={{ transitionDelay: '500ms' }}>
        <div className="container-card-list">
            <div className="container-card-list-item">
                {props.courses.map(course => (
                    <Card key={course.id}
                        {...course}
                        {...props} />
                ))}
            </div>
        </div>
    </Fade>

export default CardsList




