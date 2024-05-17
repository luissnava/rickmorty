import React, {useContext} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { globalContext } from '../context/globalContext'
const CardLocation = ({ item }) => {

    const { locations, setLocations } = useContext(globalContext)

    const handleFavorite = (id, favorite) => {
        const updateLocations = locations.map(item =>
            item.id === id ? { ...item, favorite: !favorite } : item
        );
        setLocations(updateLocations);

    }

    return (
        <div className={`w-full h-[60vh] relative bg-white shadow-xl transform duration-500 hover:-translate-y-2 group z-10`}>
            <div className="w-full h-full absolute top-0 left-0 p-10  transform duration-300 z-10">

                <div className="w-full flex justify-end">
                    <FontAwesomeIcon icon={faHeart} color={item.favorite ? "red" : "gray"} size='2xl' className='cursor-pointer' onClick={
                        () => handleFavorite(item.id, item.favorite)}></FontAwesomeIcon>
                </div>

                <div className="w-full text-xl font-bold mb-5 mt-5 text-left">
                    <h3 className={`mb-2 uppercase`}>{item.name}</h3>

                </div>

                <div className={`w-full text-black text-lg text-left `}>
                    <h3 className={`mb-2 uppercase`}><span className='font-semibold'>Dimension: </span>{item.dimension}</h3>
                    <h3 className={`mb-2 uppercase`}><span className='font-semibold'>Residentes: </span> {item.residents}</h3>
                    <h3 className={`mb-2 uppercase`}><span className='font-semibold'>Tipo: </span>{item.type}</h3>

                </div>

            </div>

        </div>
    )
}

export default CardLocation
