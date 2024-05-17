import React, { useState, useMemo, useEffect } from 'react'
import { globalContext } from './globalContext'

const Globalconntext = ({ children }) => {
    const [windowWidth, setWindowWidth] = useState(0)
    const [favorites, setFavorites] = useState([])
    const [locations, setLocations] = useState([])
    const [characters, setCharacters] = useState([])
    const [session, setSession] = useState(false)

    const handleLogin = (username, password) => {
        localStorage.setItem('user', username);
        localStorage.setItem('password', password);
    };

    const handleLogout = () => {
        localStorage.removeItem('user');
        localStorage.removeItem('password');
        setSession(false)
        window.location.reload()
    };

    const handleSession = () => {
        const user = localStorage.getItem('user');
        if (user) {
            setSession(user)
        }
    };

    const handleWindow = () => setWindowWidth(window.innerWidth)

    const handleGetCharacter = async () => {
        try {
            const response = await fetch("https://rickandmortyapi.com/api/character")
            if (!response.ok) {
                console.log("Error al consultar los personajes");
            }

            const data = await response.json();
            if (data.results) {
                console.log("Characters", data.results);
                const dataCharacters = data.results.map((item) => (
                    {
                        id: item.id,
                        name: item.name,
                        image: item.image,
                        species: item.species,
                        gender: item.gender,
                        status: item.status,
                        favorite: false,
                        option: "characters"
                    }
                ))

                setCharacters(dataCharacters)
            }

        } catch (error) {
            console.log("Error al consultar la información", error);
        }
    }

    const handleGetLocations = async () => {
        try {
            const response = await fetch("https://rickandmortyapi.com/api/location")
            if (!response.ok) {
                console.log("Error al consultar los personajes");
            }

            const data = await response.json();
            if (data.results) {
                console.log("Locations", data.results);
                const dataLocations = data.results.map((item) => (
                    {
                        id: item.id,
                        name: item.name,
                        dimension: item.dimension,
                        residents: item.residents.length,
                        type: item.type,
                        favorite: false,
                        option: "locations"
                    }
                ))
                setLocations(dataLocations)
            }

        } catch (error) {
            console.log("Error al consultar la información", error);
        }
    }

    useEffect(() => {
        handleGetCharacter()
        handleGetLocations()
        handleSession()
    }, [])

    useEffect(() => {
        window.addEventListener("resize", handleWindow)

        return () => window.removeEventListener("resize", handleWindow)
    }, [])

    // Guardar favoritos en localStorage cada vez que favorites cambie
    useEffect(() => {
        localStorage.setItem('favorites', favorites);
    }, [favorites]);


    // Cargar favoritos desde localStorage cuando la aplicación se monta
    useEffect(() => {
        const savedFavorites = localStorage.getItem('favorites');
        if (savedFavorites) {
            setFavorites(JSON.parse(savedFavorites));
        }
    }, []);
    

    // Memoriza los valores 
    const valueProvider = useMemo(() => (
        {
            windowWidth,
            favorites,
            characters,
            locations,
            session,
            handleLogin,
            handleLogout,
            setFavorites,
            setCharacters,
            setLocations,
            setWindowWidth
        }
    ), [windowWidth, favorites, locations, characters])



    return (
        <globalContext.Provider value={valueProvider}>
            {children}
        </globalContext.Provider>
    )
}

export default Globalconntext
