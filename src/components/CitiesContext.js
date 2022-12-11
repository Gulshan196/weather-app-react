

import {React, createContext, useState, useEffect} from 'react'
import cityData from './data';

export const citiesContext = createContext();
const CitiesProvider = ({children}) => {
const [city ,setCity] = useState([]);

const [icon, setIcon] = useState({});

const [info,setInfo] = useState();

const [show,setShow] = useState({});

useEffect(()=>{
 setCity(cityData);
},[])

  return (
    <citiesContext.Provider value = {{city,setCity,icon,setIcon,info,setInfo,show,setShow}}>
       {children}
    </citiesContext.Provider>
  )
}

export default CitiesProvider
