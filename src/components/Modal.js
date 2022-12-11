import React, { useContext, useEffect, useState } from 'react'
import { citiesContext } from './CitiesContext';
import City from './City';

const Modal = ({modal,setModal}) => {
  const name = useContext(citiesContext);

  const [cityName,setCityName] = useState('');
  const [cityArr,setCityArr] = useState(name.city); 

  const fuzzySearch = () =>{
    let cityArr = name.city;

    let map = name.show;

    map = {};

    let narr = cityArr.filter((el)=>{return el.city.toLowerCase().includes(cityName.toLowerCase())});

    narr.forEach((el)=>{
      if(!map[el.city]) map[el.city] = true;
    })

    name.setShow(map);

    console.log(map);
    setCityArr(narr);
  }

  useEffect(()=>{
   fuzzySearch();
  },[cityName]);

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
      <input type='text' name='search' placeholder={`search`} onChange={(e)=>setCityName(e.target.value)}>
      </input>
    </div>
    <div className="modal-body">
      <City cityArr = {cityArr}/>
    </div>
  </div>
  <div id="overlay" className={modal ? "show" : ""} onClick={closeModal}></div> 
    </div>
  )
}

export default Modal
