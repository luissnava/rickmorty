import React, { useState, useContext, useEffect } from 'react'
import { globalContext } from '../context/globalContext'
import { useNavigate } from 'react-router-dom'
const Login = () => {
  const [user, setUser] = useState("")
  const [password, setPassword] = useState("")
  const { handleLogin, handleLogout, session } = useContext(globalContext)

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name == "user") {
      setUser(value)
    } else if (name == "password") {
      setPassword(value)
    }
  }

  const handleSetLogin = () => {
    if (user !== "" && password !== "") {
      handleLogin(user, password)
      window.location.reload()
    }else{
      alert("Todos los campos son requeridos")
    }

  }



  return (
    <div>
      <div className="w-full mt-24 flex justify-center">
        <h1 className='text-xl'>{session ? "Cerrar Sesión" : "Iniciar Sesión"}</h1>
      </div>

      <div className="w-full flex justify-center items-center">
        <div className="w-full max-w-md">
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">

            {
              session ? null :
                <>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" >
                      Usuario
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
                      name="user" type="text" placeholder="Username" required onChange={handleChange} />
                  </div>

                  <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      Contraseña
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight"
                      name="password"
                      type="password"
                      placeholder="***********" required onChange={handleChange}/>
                  </div>
                </>
            }

            <div className="flex items-center justify-between">
              {
                session ? <button className="bg-[#08b2d1] hover:bg-blue-400 text-white font-bold py-2 px-4 rounded" type="button" onClick={handleLogout}>
                  Salir
                </button> : <button className="bg-[#08b2d1] hover:bg-blue-400 text-white font-bold py-2 px-4 rounded" type="button" onClick={handleSetLogin}>
                  Entrar
                </button>
              }
            </div>
          </form>
          <p className="text-center text-gray-500 text-xs">
            2024 Rick & Morty
          </p>
        </div>
      </div>

    </div>
  )
}

export default Login
