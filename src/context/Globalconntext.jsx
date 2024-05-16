import React, { useState, useMemo, useEffect } from 'react'

import { globalContext } from './globalContext'

const Globalconntext = ({ children }) => {
    const [windowWidth, setWindowWidth] = useState(0)
    const [favorites, setFavorites] = useState([])
    const [data, setData] = useState([])

    const handleWindow = () => setWindowWidth(window.innerWidth)

    const handleGetData = async () => {
        try {
            const response = await fetch("https://rickandmortyapi.com/api/character")
            if (!response.ok) {
                console.log("Error al consultar los personajes");
            }

            const data = await response.json();
            if (data.results) {
                console.log(data.results);
                setData(data.results)
            }

        } catch (error) {
            console.log("Error al consultar la información", error);
        }
    }

    useEffect(() => {
        window.addEventListener("resize", handleWindow)

        return () => window.removeEventListener("resize", handleWindow)
    }, [])

    useEffect(() => {
        handleGetData()
    }, [])

    // Memoriza los valores 
    const valueProvider = useMemo(() => (
        {
            windowWidth,
            favorites,
            data,
            setFavorites,
            setData,
            setWindowWidth
        }
    ), [windowWidth, favorites,data])



    return (
        <globalContext.Provider value={valueProvider}>
            {children}
        </globalContext.Provider>
    )
}

export default Globalconntext
