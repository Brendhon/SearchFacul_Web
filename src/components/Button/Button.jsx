import React from 'react'
import './Button.css'

const Button = props => {

    const deactivate = _ => props.deactivate()
    const activate = _ => props.activate()

    return (
        <div className="button-content" >
            {props.activated ? <div className="button-triangle"></div> : <div style={{ marginTop: 15 }} />}
            <button onClick={props.activated ? deactivate : activate}>{props.text}</button>
        </div>
    )
}

export default Button 