import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { globalContext } from '../context/globalContext'
const Card = ({ item, location, character }) => {

    const { characters, locations, setFavorites, favorites } = useContext(globalContext)

    const handleFavorite = (id, favorite, type) => {

        let target;

        if (type === "characters") {
            target = characters.find(item => item.id === id);
        } else if (type === "locations") {
            target = locations.find(item => item.id === id);
        }
        
        if (target) {
            const isFavorite = favorites.some(item => item.id === id && item.option === type);

            if (isFavorite) {
                // Eliminar de favoritos
                setFavorites(favorites.filter(item => item.id !== id || item.option !== type));
            } else {
                // Agregar a favoritos
                setFavorites([...favorites, { ...target }]);
            }
        }

    }

    return (
        <>
            {
                character && <div className={`w-full h-[50vh] relative shadow-xl transform duration-500 hover:-translate-y-2 group z-10`}
                    style={{
                        backgroundImage: `url(${item.image})`,
                        paddingBottom: "100%",
                        backgroundSize: "cover",
                        backgroundPosition: "center center",
                    }}>


                    <div className="w-full h-full absolute top-0 left-0 p-10 text-white bg-black bg-opacity-0 hover:bg-opacity-50 transform duration-300 z-10">
                        <div className="w-full flex justify-end">
                            <FontAwesomeIcon icon={faHeart} color={item.favorite ? "red" : "white"} size='2xl' className='cursor-pointer' onClick={
                                () => handleFavorite(item.id, item.favorite, "characters")}></FontAwesomeIcon>
                        </div>

                        <div className="w-full text-xl font-semibold mb-5 text-left transform translate-y-20 group-hover:translate-y-0 duration-500">
                            <h3 className={`mb-2 uppercase`}>{item.name}</h3>
                        </div>

                        <div className={`opacity-0 text-white text-xl text-left group-hover:opacity-80 transform translate-y-20 group-hover:translate-y-0 duration-500 h-[25vh]`}>
                            <h1>- {item.species}</h1>
                            <h1>- {item.gender}</h1>
                            <h1>- {item.status}</h1>

                        </div>
                    </div>


                </div>
            }
            {
                location && <div className={`w-full h-[50vh] relative bg-white shadow-xl transform duration-500 hover:-translate-y-2 group z-10`}>


                    <div className="w-full h-full absolute top-0 left-0 p-10  transform duration-300 z-10">
                        <div className="w-full flex justify-end">
                            <FontAwesomeIcon icon={faHeart} color={item.favorite ? "red" : "gray"} size='2xl' className='cursor-pointer' onClick={
                                () => handleFavorite(item.id, item.favorite, "locations")}></FontAwesomeIcon>
                        </div>

                        <div className="w-full text-2xl font-bold mb-5 text-left">
                            <h3 className={`mb-2 uppercase`}>{item.name}</h3>

                        </div>

                        <div className={`text-black text-xl text-left `}>
                            <h3 className={`mb-2 uppercase`}><span className='font-semibold'>Dimension: </span>{item.dimension}</h3>
                            <h3 className={`mb-2 uppercase`}><span className='font-semibold'>Residentes: </span> {item.residents}</h3>
                            <h3 className={`mb-2 uppercase`}><span className='font-semibold'>Tipo: </span>{item.type}</h3>

                        </div>

                    </div>


                </div>
            }
        </>

    )
}

export default Card
