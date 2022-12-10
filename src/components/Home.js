import React, { useContext, useEffect } from 'react'
import { citiesContext } from './CitiesContext';
import Modal from './Modal';

const Home = ({setActive,setModal,modal}) => {
   const name = useContext(citiesContext);

   // component did mount
    useEffect(()=>{
        setActive(true);
        console.log(name.city);
      });
  
      // component will unmount
      useEffect(()=>{
     return () => {
        setActive(false);
     }
      });

      function openModal () {
        setModal(true);
        }


  return (
       <div className='main-content'>
        <div className='main-header'>
            <h3>My Favorite cities</h3>
            <button onClick={openModal}> Add New City</button>
        </div>
        <div className='main-body'>
        </div>
        <Modal modal = {modal} setModal = {setModal}/>
       </div>
  )
}

export default Home
