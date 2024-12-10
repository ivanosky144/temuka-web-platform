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
      const { name, value } = e.target;
      setFormData({
          ...formData,
          [name]: value,
      });
  }

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
        await login(formData);
        navigate("/");
      } catch (err) {
        // onError("Login tidak berhasil, email atau password yang anda masukkan tidak sesuai")
    }
  }


  return (
    <div className="bg-gray-100 h-screen flex">        
      <div className="bg-gray-100 w-[100%] flex justify-center items-center">
        <form 
          className="flex flex-col items-center gap-5 bg-white shadow-md py-20 px-20 rounded-lg h-[60%]"
          onSubmit={handleLogin}
        >
          <label htmlFor="" className="font-extrabold text-3xl">Login</label>
          <div className="flex flex-col gap-5 font-semibold">
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
              className="p-2 rounded-md w-72 outline outline-offset outline-gray-400 outline-1  text-lg" 
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <label htmlFor="" className="text-sm text-gray-500">
            <Link to={'/register'}>
              Don't have an account? Register now
            </Link>
          </label>
          <button type='submit' className="text-black bg-yellow rounded-xl hover:bg-yellow font-semibold py-3 px-5 w-[100%] transform transition-transform hover:-translate-y-1">
            Sign in
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login


