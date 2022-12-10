import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus} from '@fortawesome/free-solid-svg-icons'
import Modal from './Modal'
import { useContext, useEffect, useState } from 'react';
import { citiesContext } from './CitiesContext';
import cityData from './data';

const Cities = ({modal,setModal}) => {

  const name = useContext(citiesContext);

  const [city,setCity] = useState([]);

  useEffect(()=>{
    let cityArr = cityData.filter((el)=>!name.city.includes(el));
    console.log(cityArr);
    setCity(cityArr);

  },[name.city]);
    
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
          <FontAwesomeIcon icon={faCirclePlus} className='add-icon' onClick={openModal}/>
        </div>
        <div>
          {city && city.map((el)=>{
              return( <div className='city-details' tabIndex={0}>
              <div>{el.city}</div>
              <div>{el.tempreture}<span>&#176;</span>C</div>
            </div>);
          })}
      </div>
      </div>
      <Modal modal = {modal} setModal = {setModal} />
    </div>
  )
}

export default Cities
