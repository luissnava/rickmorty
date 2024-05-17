import React, { useContext, useEffect } from 'react'
import { globalContext } from '../context/globalContext'
import CardLocation from './CardLocation'
const Locations = () => {
  const { locations } = useContext(globalContext)

  useEffect(()=>{
    console.log(locations);
  },[locations])

  return (
    <div className='w-full grid grid-cols-4 gap-10 p-20 bg-slate-200'>
      {
        locations.map((item,index)=>(
           <CardLocation key={index} item={item}/>
        ))
      }
     
    </div>
  )
}

export default Locations
