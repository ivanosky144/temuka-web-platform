import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useAuthStore from '../store/authStore';

const Register: React.FC = () => {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
      username: "",
      email: "",
      password: "",
  });
  const register = useAuthStore((state) => state.register);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target
      setFormData({
          ...formData,
          [name]: value,
      })
  }

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
        await register(formData)
        navigate("/login")
      } catch (err) {
        // onError("Registrasi tidak berhasil, email mungkin sudah terdaftar")
    }
  }


  return (
    <div className="bg-gray-100 h-screen flex">        
      <div className="bg-gray-100 w-[100%] flex justify-center items-center">
        <form 
          className="flex flex-col items-center gap-5 bg-white shadow-md py-20 px-20 rounded-lg"
          onSubmit={handleRegister}
        >
          <label htmlFor="" className="font-extrabold text-3xl">Create your account</label>
          <div className="flex flex-col gap-5 font-semibold">
            <input 
              type="text" 
              placeholder="Username"
              name="username" 
              className="p-2 rounded-md w-72 outline outline-offset outline-gray-400 outline-1 text-lg" 
              value={formData.username}
              onChange={handleChange}
            />
            <input 
              type="text" 
              placeholder="Email" 
              name="email"
              className="p-2 rounded-md w-72 outline outline-offset outline-gray-400 outline-1 text-lg" 
              value={formData.email}
              onChange={handleChange}
            />
            <input 
              type="password" 
              placeholder="Password" 
              name="password"
              className="p-2 rounded-md w-72 outline outline-offset outline-gray-400 outline-1 text-lg" 
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <label htmlFor="" className="text-sm text-gray-500">
            <Link to={'/login'}>
              Already have an account? Login now
            </Link>
          </label>
          <button type='submit' className="text-black bg-yellow rounded-xl hover:bg-yellow font-semibold py-3 px-5 w-[100%] transform transition-transform hover:-translate-y-1">
            Register
          </button>
        </form>
      </div>
    </div>
  )
}

export default Register
