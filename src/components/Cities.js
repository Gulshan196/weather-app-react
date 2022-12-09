import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquarePlus } from '@fortawesome/free-regular-svg-icons'
import Modal from './Modal'
import { useState } from 'react';

const Cities = () => {

  const [modal,setModal] = useState(false);
    
function openModal () {
setModal(true);
}
  return (
    <div className='cities-container'>
      <div className='cities-wrapper'>
        <div className='header'>
          <div>
            Cities
          </div>
          <FontAwesomeIcon icon={faSquarePlus} className='add-icon' onClick={openModal}/>
        </div>
        <div>
        <div className='city-details' tabIndex={0}>
          <div>Bangalore</div>
          <div>20 <span>&#176;</span>C</div>
        </div>

        <div className='city-details' tabIndex={0}>
          <div>Bangalore</div>
          <div>20 <span>&#176;</span>C</div>
        </div>

        <div className='city-details' tabIndex={0}>
          <div>Bangalore</div>
          <div>20 <span>&#176;</span>C</div>
        </div>

        <div className='city-details' tabIndex={0}>
          <div>Bangalore</div>
          <div>20 <span>&#176;</span>C</div>
        </div>

        <div className='city-details' tabIndex={0}>
          <div>Bangalore</div>
          <div>20 <span>&#176;</span>C</div>
        </div>

        <div className='city-details' tabIndex={0}>
          <div>Bangalore</div>
          <div>20 <span>&#176;</span>C</div>
        </div>

        <div className='city-details' tabIndex={0}>
          <div>Bangalore</div>
          <div>20 <span>&#176;</span>C</div>
        </div>

        <div className='city-details' tabIndex={0}>
          <div>Bangalore</div>
          <div>20 <span>&#176;</span>C</div>
        </div>

        <div className='city-details' tabIndex={0}>
          <div>Bangalore</div>
          <div>20 <span>&#176;</span>C</div>
        </div>

        <div className='city-details' tabIndex={0}>
          <div>Bangalore</div>
          <div>20 <span>&#176;</span>C</div>
        </div>

        <div className='city-details' tabIndex={0}>
          <div>Bangalore</div>
          <div>20 <span>&#176;</span>C</div>
        </div>
      </div>
      </div>
      <Modal modal = {modal} setModal = {setModal}/>
    </div>
  )
}

export default Cities
