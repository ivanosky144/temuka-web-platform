import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { loginUser } from '../services/authService'
import useAuthStore from '../store/authStore'

const Login: React.FC = () => {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
      email: "",
      password: "",
  });
  const login = useAuthStore((state) => state.login);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target
      setFormData({
          ...formData,
          [name]: value,
      })
  }

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
        await login(formData)
        navigate("/")
      } catch (err) {
        // onError("Login tidak berhasil, email atau password yang anda masukkan tidak sesuai")
    }
  }


  return (
    <div className="bg-gray-100 h-screen flex">        
      <div className="bg-gradient-to-r from-cyan via-cyan to-lightcyan w-[50%] relative">
        <label className="absolute text-white font-extrabold text-[2.5rem] top-20 left-12 block">Welcome to <br /> Temuka</label>
      </div>
      <div className="bg-gray-100 w-[60%] flex justify-center items-center">
        <form 
          className="flex flex-col items-center gap-5 bg-white shadow-md py-20 px-20 rounded-lg"
          onSubmit={handleLogin}
        >
          <label htmlFor="" className="text-cyan font-bold text-2xl">LOGIN</label>
          <div className="flex flex-col gap-5">
            <input 
              type="text" 
              placeholder="Email" 
              name="email" 
              className="bg-gray-200 p-2 rounded-md w-64 outline-blue-100 hover:outline-blue-200" 
              value={formData.email}
              onChange={handleChange}
            />
            <input 
              type="password" 
              placeholder="Password" 
              name="password" 
              className="bg-gray-200 p-2 rounded-md w-64 outline-blue-100 hover:outline-blue-200" 
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <label htmlFor="" className="text-sm text-gray-500">
            <Link to={'/register'}>
              Don't have an account? Register now
            </Link>
          </label>
          <button type='submit' className="text-white bg-cyan rounded-md hover:bg-midcyan font-semibold py-2 px-5 w-[100%] transform transition-transform hover:-translate-y-1">
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
