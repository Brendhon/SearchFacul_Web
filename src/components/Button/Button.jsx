import React from 'react'
import './Button.css'

const Button = props => {

    const deactivate = _ => props.deactivate()
    const activate = _ => props.activate()

    return (
        <div className="button-container" >
            {props.activated ? <div className="button-triangle"></div> : <div style={{ marginTop: 15 }} />}

            <div className="button-content">
                <button className={props.activated ? "button-content-activate" : "button-content-deactivate"}
                    onClick={props.activated ? deactivate : activate}>
                    {props.text}</button>
            </div>

        </div>
    )
}

export default Button 