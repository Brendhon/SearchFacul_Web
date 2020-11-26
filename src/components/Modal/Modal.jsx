import React from 'react'

import Modal from '@material-ui/core/Modal'
import { FiX } from 'react-icons/fi'


const SModal = props => {

    const handleClose = _ => props.onClose()

    return (
        <Modal open={props.open} onClose={handleClose}>

            <div className="modal-box">

                {props.children}

                <div className="close-modal">
                    <button className="btn btn-outline-dark" onClick={handleClose}>
                        <FiX />
                    </button>
                </div>

            </div>

        </Modal>
    )
}

export default SModal