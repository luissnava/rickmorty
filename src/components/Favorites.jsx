import React, { useContext, useEffect } from 'react'
import { globalContext } from '../context/globalContext'
import CardLocation from './CardLocation'
import CardCharacter from './CardCharacter'
const Favorites = () => {
  const { characters, locations, favorites, setFavorites } = useContext(globalContext)

  useEffect(() => {
    const combinedFavorites = [
      ...characters.filter(item => item.favorite),
      ...locations.filter(item => item.favorite)
    ]

    setFavorites(combinedFavorites)

  }, [characters, locations])

  return (
    <div className='w-full grid grid-cols-4 gap-10 p-20'>
      {
        favorites.map((item, index) => (
         item.option == "characters" ? <CardCharacter item={item}/> : item.option == "locations" ? <CardLocation item={item}/> : null
        ))
      }
    </div>
  )
}

export default Favorites
