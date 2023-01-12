import React, { useContext, useEffect, useState } from 'react'
import { citiesContext } from './CitiesContext';
import cityData from './data';
import Modal from './Modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types'


const Home = ({setActive,setModal,modal}) => {
   const name = useContext(citiesContext);
   const [fav,setFav] = useState([]);
   const [val, setVal] = useState(false);


   function handleFavourites() {
   let map = name.icon;
   let arr = [];
   for (let i = 0; i < cityData.length;i++){
    if (map[cityData[i].city]){
      arr.push(cityData[i]);
    }
    setFav(arr);
   }
   }

   function changeIcon(city) {
    let map = name.icon;

    if (!map[city]) map[city] = true;
    else map[city] = false;

    name.setIcon(map);
    
    let arr = [];
    for (let i = 0; i < cityData.length;i++){
     if (map[cityData[i].city]){
       arr.push(cityData[i]);
     }
     setFav(arr);
    }
    setVal((val) => { return !val });

    toast.success('Removed from favourites', {
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
        <ToastContainer 
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light" />
          {fav && fav.map((el)=>{
            return (<div key={el.city} className='main-body'>
            <div>
              <div className='main-city-header'>
               <div className='city-title'>
                {el.city}
               </div>
               {name.icon[el.city] ? <img alt='coloricon' onClick={() => changeIcon(el.city)} src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIHN0eWxlPSJmaWxsOiNGRkRBNDQ7IiBkPSJNMjc2LjAxNCwyMy44NjZsNjcuMDI3LDEzNS43OTlsMTQ5LjgyNSwyMS43ODVjMTguMzA2LDIuNjYyLDI1LjYxNSwyNS4xNTcsMTIuMzY5LDM4LjA3MQ0KCUwzOTYuODI1LDMyNS4yMDVsMjUuNTc4LDE0OS4yNGMzLjEyNSwxOC4yMzItMTYuMDEyLDMyLjEzNS0zMi4zODUsMjMuNTI4bC0xMzQuMDI1LTcwLjQ1MmwtMTM0LjAxNiw3MC40NTINCgljLTE2LjM3NCw4LjYwOC0zNS41MTEtNS4yOTQtMzIuMzg2LTIzLjUyOGwyNS41OC0xNDkuMjQxTDYuNzY0LDIxOS41MjFjLTEzLjI0Ni0xMi45MTItNS45MzctMzUuNDA5LDEyLjM2OS0zOC4wNzFsMTQ5LjgyNC0yMS43ODcNCglsNjcuMDI2LTEzNS43OThDMjQ0LjE3MSw3LjI3NywyNjcuODI3LDcuMjc3LDI3Ni4wMTQsMjMuODY2eiIvPg0KPHBhdGggc3R5bGU9ImZpbGw6I0ZGQUEwMDsiIGQ9Ik00OTIuODY3LDE4MS40NDhsLTE0OS44MjUtMjEuNzg1TDI3Ni4wMTQsMjMuODY2Yy00LjIxNS04LjU0MS0xMi41MjQtMTIuNjk1LTIwLjcxOC0xMi40NDF2NDE2LjQ2Mw0KCWwwLjY5OC0wLjM2NmwxMzQuMDI1LDcwLjQ1MWMxNi4zNzQsOC42MDcsMzUuNTEtNS4yOTYsMzIuMzg2LTIzLjUyOGwtMjUuNTc4LTE0OS4yNDFsMTA4LjQwOS0xMDUuNjg1DQoJQzUxOC40ODIsMjA2LjYwNSw1MTEuMTcyLDE4NC4xMSw0OTIuODY3LDE4MS40NDh6Ii8+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg=="/> :
                <img alt='' src=''/>}
              </div>
              <div className='main-city-body'>
               <div className='desc-container'>
                 clear with periodic clouds
               </div>
               <div>
                <strong>Tempreture:</strong> {el.tempreture}<span>&#176;</span>C
               </div>
               <div>
                <strong>Humidity:</strong> <span>{el.humidity}</span>
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

Home.propTypes = {modal :PropTypes.bool, setModal :PropTypes.func, setActive :PropTypes.func}

export default Home
