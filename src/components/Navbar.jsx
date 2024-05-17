import React, { useContext, useEffect } from 'react'
import { navbarServer } from './server'
import { NavLink } from 'react-router-dom'
import { globalContext } from '../context/globalContext'
const Navbar = () => {
    const {session} = useContext(globalContext)
    return (
        <nav className='w-full flex justify-center items-center sticky top-0 p-5 shadow-xl bg-white z-50'>

            <div className="w-full px-5">
                <img src="/images/logo.webp" alt="logo" width={200} height={200} />
            </div>
            <div className="w-full">
                <ul className='w-full flex items-center justify-center gap-5'>
                    {
                        navbarServer.map((item, index) => (
                            <li key={item.id} className='text-center text-md'>
                                <NavLink to={item.url}>{session ? item.title2 ? item.title2 : item.title :  item.title}</NavLink>


                            </li>
                        ))
                    }
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
