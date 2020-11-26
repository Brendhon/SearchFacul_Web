import React from 'react'
import './Alert.css'

import Alert from '@material-ui/lab/Alert'

// eslint-disable-next-line
export default props => {

    const handleClose = _ => props.onClose()

    const CName = props.open ? "alert-absolute" : "alert-none"

    return (
        <div className={CName}>
            <Alert severity={props.type} onClose={handleClose}>{props.text}</Alert>
        </div>
    )
}