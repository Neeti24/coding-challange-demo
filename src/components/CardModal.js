import React from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';

const CardModal = (props) => {
    return (
        <Modal
        isOpen={props.isOpen}
        onRequestClose={() => props.updateIsOpen(false)}
        contentLabel="Login"
        ariaHideApp={false}
        className="modal"
      >
        <h3 className="modal__title">Card</h3>
        <div className="modal__body">
        <span>total price : {props.totalPrice}</span>
        <button className="navy"><Link className="checkOut" to="/thankyou">Check Out</Link></button>
        <button onClick={() => props.updateIsOpen(false)}>Close</button>
        </div>
      </Modal> 
    )
}

export default CardModal;