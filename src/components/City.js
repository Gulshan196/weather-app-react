import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext } from 'react'
import { citiesContext } from './CitiesContext'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const City = () => {
    const name = useContext(citiesContext);

   function addCity(val) {
        let c = name.city.find((el)=>el.city===val.city);
        console.log(c);
        const ans = name.city.filter((el)=>el !== c);
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
            return( <div key={el.city} className='city-container'>
            <div>{el.city}</div>
            <FontAwesomeIcon icon={faCirclePlus} className='add-icon' onClick={()=>addCity(el)}/>
          </div>)

        })
     
}
    </div>
  )
}

export default City
