import React from 'react'

const Modal = ({modal,setModal}) => {
    function closeModal() {
        setModal(false);
    }
  return (
    <div>
         {/* <button data-modal-target="#modal">Open Modal</button> */}
  <div className={modal ? "modal show":"modal"} id="modal">
    <div className="modal-header">
      <div className="title">Example Modal</div>
      <button data-close-button className="close-button" onClick={closeModal}>&times;</button>
    </div>
    <div className="modal-body">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quod alias ut illo doloremque eum ipsum obcaecati distinctio debitis reiciendis quae quia soluta totam doloribus quos nesciunt necessitatibus, consectetur quisquam accusamus ex, dolorum, dicta vel? Nostrum voluptatem totam, molestiae rem at ad autem dolor ex aperiam. Amet assumenda eos architecto, dolor placeat deserunt voluptatibus tenetur sint officiis perferendis atque! Voluptatem maxime eius eum dolorem dolor exercitationem quis iusto totam! Repudiandae nobis nesciunt sequi iure! Eligendi, eius libero. Ex, repellat sapiente!
    </div>
  </div>
  <div id="overlay" className={modal ? "show" : ""} onClick={closeModal}></div> 
    </div>
  )
}

export default Modal
