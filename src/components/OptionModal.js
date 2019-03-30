import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
        <Modal 
            isOpen={props.selectedOption}
            onRequestClose={props.closeModal}
            ariaHideApp={false}
            contentLabel="An Option"
        >
        <h3>A Random Option</h3>
        <p>{props.message}</p>
        <button onClick={props.closeModal}>Close Modal</button>
        </Modal>
    );

export default OptionModal;