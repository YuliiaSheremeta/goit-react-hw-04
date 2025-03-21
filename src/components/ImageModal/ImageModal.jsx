import React from 'react';
import css from './ImageModal.module.css'
import Modal from 'react-modal';
Modal.setAppElement('#root');

export default function ImageModal({ onRequestClose, image }) { 
    
    const isOpen = Boolean(image);

    return (
        <Modal
            className={css.modal}
            overlayClassName={`${css.overlay} ${isOpen? css.overlayIsOpen : '' }`}
            isOpen={isOpen}
            onRequestClose={onRequestClose}
           >
            {image && (
                <>
                    <button className={css.closeModalBtn} onClick={onRequestClose}>X</button>
                    <img className={css.modalImage}
                        src={image.urls.regular} alt={image.alt_description} />
                    <p className={css.p}>Likes :{image.likes}</p>
                    <p className={css.p}>Autor : {image.user.name}</p>
                    <p className={css.p}>Description : {image.description}</p>
                </>
            )}
        </Modal>

    );
}