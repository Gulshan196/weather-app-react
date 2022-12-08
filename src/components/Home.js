import React, { useEffect } from 'react'

const Home = ({setActive}) => {
   // component did mount
    useEffect(()=>{
        setActive(true);
      },[]);
  
      // component will unmount
      useEffect(()=>{
  
     return () => {
        setActive(false);
     }
      },[]);


  return (
       <div className='main-content'>
        <div className='main-header'>
            <h3>My Favorite cities</h3>
            <button> Add New City</button>
        </div>
        <div className='main-body'>
        </div>
       </div>
  )
}

export default Home
