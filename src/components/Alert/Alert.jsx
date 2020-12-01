import React from 'react'
import './Alert.css'

import Alert from '@material-ui/lab/Alert'

// eslint-disable-next-line
export default props => {

    const handleClose = _ => props.onClose()

    return (
        <div className={props.open ? "alert-absolute" : "alert-none"}>
            <Alert severity={props.type || "info"} onClose={handleClose}>{props.text}</Alert>
        </div>
    )
}