import React from 'react'
import './Modal.css'

import Modal from '@material-ui/core/Modal'
import { FiX } from 'react-icons/fi'
import Slide from '@material-ui/core/Slide'

// eslint-disable-next-line
export default props => {

    const handleClose = _ => props.onClose()

    return (
        <Modal open={props.open}
            onClose={handleClose}
            disableEnforceFocus
            disableAutoFocus>

            <Slide in={props.open} direction="down">
                <div className="modal-box">

                    {props.children}

                    <div className="close-modal">
                        <button className="button-outline button-close" onClick={handleClose}>
                            <FiX />
                        </button>
                    </div>

                </div>
            </Slide>


        </Modal>
    )
}