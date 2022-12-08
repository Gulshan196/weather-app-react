import React, { useEffect, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquarePlus } from '@fortawesome/free-regular-svg-icons'

const Cities = () => {

  const inputReference = useRef(null);

    useEffect(() => {
        inputReference.current.focus();
    }, []);
  return (
    <div className='cities-container'>
      <div className='cities-wrapper'>
        <div className='header'>
          <div>
            Cities
          </div>
          <FontAwesomeIcon icon={faSquarePlus} className='add-icon'/>
        </div>
        <div>
        <div className='city-details' ref={inputReference} tabIndex={-1}>
          <div>Bangalore</div>
          <div>20 <span>&#176;</span>C</div>
        </div>

        <div className='city-details' ref={inputReference} tabIndex={-1}>
          <div>Bangalore</div>
          <div>20 <span>&#176;</span>C</div>
        </div>

        <div className='city-details' ref={inputReference} tabIndex={-1}>
          <div>Bangalore</div>
          <div>20 <span>&#176;</span>C</div>
        </div>

        <div className='city-details' ref={inputReference} tabIndex={-1}>
          <div>Bangalore</div>
          <div>20 <span>&#176;</span>C</div>
        </div>

        <div className='city-details' ref={inputReference} tabIndex={-1}>
          <div>Bangalore</div>
          <div>20 <span>&#176;</span>C</div>
        </div>

        <div className='city-details' ref={inputReference} tabIndex={-1}>
          <div>Bangalore</div>
          <div>20 <span>&#176;</span>C</div>
        </div>

        <div className='city-details' ref={inputReference} tabIndex={-1}>
          <div>Bangalore</div>
          <div>20 <span>&#176;</span>C</div>
        </div>

        <div className='city-details' ref={inputReference} tabIndex={-1}>
          <div>Bangalore</div>
          <div>20 <span>&#176;</span>C</div>
        </div>

        <div className='city-details'ref={inputReference} tabIndex={-1}>
          <div>Bangalore</div>
          <div>20 <span>&#176;</span>C</div>
        </div>

        <div className='city-details'>
          <div>Bangalore</div>
          <div>20 <span>&#176;</span>C</div>
        </div>

        <div className='city-details'>
          <div>Bangalore</div>
          <div>20 <span>&#176;</span>C</div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Cities
