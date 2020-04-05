import React from 'react';

import styles from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop';

const Modal = props => {
    return (
        <React.Fragment>
            <Backdrop open={props.open} modalHandler={props.modalHandler}/>
            <div className={[styles.Modal, props.open ? styles.ModalFadeIn : styles.ModalFadeOut].join(' ')}>
                { props.children }
            </div>
        </React.Fragment>
    );
};

export default Modal;