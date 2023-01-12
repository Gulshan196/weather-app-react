import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useRef, useState } from 'react'
import { citiesContext } from './CitiesContext'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const City = () => {
  const name = useContext(citiesContext);

  // we want to persist values between renders.
  const bool = useRef(false);

  if (Object.keys(name.show).length !== 0) {
    bool.current = true;
  }



  function addCity(val) {
    let c = name.city.find((el) => el.city === val.city);
    const ans = name.city.filter((el) => el !== c);
    name.setCity(ans);

    toast.success('City added', {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }
  return (
    <div>
      {name.city && name.city.map((el) => {

        if (!bool.current) {
          return (<div key={el.city} className='city-container'>
            <div>{el.city}</div>
            <FontAwesomeIcon icon={faCirclePlus} className='add-icon' onClick={() => addCity(el)} />
          </div>)
        }
        else {
          if (name.show[el.city]) {
            return (<div key={el.city} className='city-container'>
              <div>{el.city}</div>
              <FontAwesomeIcon icon={faCirclePlus} className='add-icon' onClick={() => addCity(el)} />
            </div>)
          }
        }
      })

      }
    </div>
  )
}

export default City
