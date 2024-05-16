import React, { useContext, useState } from 'react'
import { globalContext } from '../context/globalContext'
import Card from './Card'
const Home = () => {
  const { characters } = useContext(globalContext)

  return (
    <div className='w-full grid grid-cols-4 p-10 gap-10 bg-slate-200'>
      {
        characters?.map((item, index) => (
          <Card key={index} item={item} location={false} character={true}/>
        ))
      }
    </div>
  )
}

export default Home
