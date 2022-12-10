import React from 'react'
import City from './City';

const Modal = ({modal,setModal}) => {
    function closeModal() {
        setModal(false);
    }
  return (
    <div>
        <div className={modal ? "modal show":"modal"} id="modal">
    <div className="modal-header">
      <div className="title">Add City</div>
      <button data-close-button className="close-button" onClick={closeModal}>&times;</button>
    </div>
    <div className='modal-search'>
      <input type='text' name='search' placeholder={`search`}>
      </input>
    </div>
    <div className="modal-body">
      <City />
    </div>
  </div>
  <div id="overlay" className={modal ? "show" : ""} onClick={closeModal}></div> 
    </div>
  )
}

export default Modal
