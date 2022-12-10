

import {React, createContext, useState, useEffect} from 'react'
import cityData from './data';

export const citiesContext = createContext();
const CitiesProvider = ({children}) => {
const [city ,setCity] = useState([]);

const [icon, setIcon] = useState({});

useEffect(()=>{
 setCity(cityData);
},[])

  return (
    <citiesContext.Provider value = {{city,setCity,icon,setIcon}}>
       {children}
    </citiesContext.Provider>
  )
}

export default CitiesProvider
