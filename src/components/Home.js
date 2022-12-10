import React, { useContext, useEffect, useState } from 'react'
import { citiesContext } from './CitiesContext';
import cityData from './data';
import Modal from './Modal';

const Home = ({setActive,setModal,modal}) => {
   const name = useContext(citiesContext);
   const [fav,setFav] = useState([]);


   function handleFavourites() {
   let map = name.icon;
   let arr = [];
   for (let i = 0; i < cityData.length;i++){
    if (map[cityData[i].city]){
      arr.push(cityData[i]);
    }
    setFav(arr)
    console.log(arr);
   }
   }

   // component did mount
    useEffect(()=>{
        setActive(true);
        handleFavourites();
        // console.log(name.icon);
      },[]);
  
      // component will unmount
      useEffect(()=>{
     return () => {
        setActive(false);
     }
      },[]);

      function openModal () {
        setModal(true);
        }


  return (
       <div className='main-content'>
        <div className='main-header'>
            <h3>My Favorite cities</h3>
            <button onClick={openModal}> Add New City</button>
        </div>
        <div className='main-body-container'>
          {fav && fav.map((el)=>{
            return (<div key={el.city} className='main-body'>
            <div>
              <div className='main-city-header'>
               <div className='city-title'>
                {el.city}
               </div>
               <img alt='' src=''/>
              </div>
              <div className='main-city-body'>
               <div className='desc-container'>
                 clear with periodic clouds
               </div>
               <div>
                <strong>Tempreture:</strong> {el.tempreture}<span>&#176;</span>C
               </div>
               <div>
                <strong>Humidity:</strong> <span>{el.humidity}%</span>
               </div>
              </div>
            </div>
          </div>);
          })}
        

        </div>
        <Modal modal = {modal} setModal = {setModal}/>
       </div>
  )
}

export default Home
