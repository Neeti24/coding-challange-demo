import React, {useState} from 'react';
import Modal from 'react-modal';

const FormModal = (props) => {
  const [details, setDetails] = useState({email: "", password:""});

    const submit = (e) => {
        e.preventDefault()
        props.Login(details)
    }

    return (
        <Modal
        isOpen={props.modalIsOpen}
        onRequestClose={() => props.setIsOpen(false)}
        contentLabel="Login"
        ariaHideApp={false}
        className="modal"
      >
        <h3 className="modal__title">Login</h3>
         <form onSubmit={submit} className="modal__body">
                {(props.error !== "") ? (<div>{props.error}</div>) : ""}
                <input
                  type="email"
                  onChange={(e) => setDetails({...details, email: e.target.value})}
                  value={details.email}
                  placeholder="Email"
                />
                <input
                  type="password"
                  onChange={(e) => setDetails({...details, password: e.target.value})}
                  value={details.password}
                  placeholder="Password"
                />
                <button className="button">Submit</button>
            </form>
        <button onClick={() => props.setIsOpen(false)}>Close</button>
      </Modal> 
    )
}

export default FormModal;