import React, { useContext } from 'react'
import { globalContext } from '../context/globalContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
const Home = () => {
  const { data, setFavorites, favorites } = useContext(globalContext)

  const handleFavorite = (id) => {

    const target = favorites.find(item => item.id == id)

    if (target) {
      
    }else{
      
    }
    
  }
  return (
    <div className='w-full grid grid-cols-4 p-10 gap-10'>
      {
        data?.map((item, index) => (

          <div key={index} className={`w-full relative shadow-xl transform duration-500 hover:-translate-y-2 group z-10`}
            style={{
              backgroundImage: `url(${item.image})`,
              paddingBottom: "100%",
              backgroundSize: "cover",
              backgroundPosition: "center center",
            }}>


            <div className="w-full h-full absolute top-0 left-0 p-10 text-white bg-black bg-opacity-0 hover:bg-opacity-50 transform duration-300 z-10">
              <div className="w-full flex justify-end">
                <FontAwesomeIcon icon={faHeart} color={"white"} size='2xl' className='cursor-pointer' onClick={()=>handleFavorite(item.id)}></FontAwesomeIcon>
              </div>

              <div className="w-full mt-32 text-3xl mb-5 text-left transform translate-y-20 group-hover:translate-y-0 duration-500">
                <h1 className={`mb-2 uppercase`}>{item.name}</h1>
              </div>

              <div className={`opacity-0 text-white text-2xl text-left group-hover:opacity-80 transform translate-y-20 group-hover:translate-y-0 duration-500 h-[25vh]`}>
                <h1>- {item.species}</h1>
                <h1>- {item.gender}</h1>
                <h1>- {item.status}</h1>
                
              </div>
            </div>
          </div>

        ))
      }
    </div>
  )
}

export default Home
