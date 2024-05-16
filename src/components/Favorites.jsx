import React, { useContext, useEffect } from 'react'
import { globalContext } from '../context/globalContext'
import Card from './Card'
const Favorites = () => {
  const { characters, favorites, setFavorites } = useContext(globalContext)
  useEffect(() => {
    const filterfavorites = characters.filter(item => item.favorite == true)
    setFavorites(filterfavorites)
  }, [characters])

  return (
    <div className='w-full grid grid-cols-4 gap-10 p-20 bg-slate-200'>
      {
        favorites.map((item,index) => (
          <Card key={index} item={item} location={true} character={true}/>
        ))
      }
    </div>
  )
}

export default Favorites
