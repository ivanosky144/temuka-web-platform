import React, {useContext, useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import { IoSettings } from "react-icons/io5"
import { FaLayerGroup } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";

import useAuthStore from '../store/authStore';
import { UserDetailData } from '../types';
import { searchUsers } from '../services/userService';

const Navbar: React.FC = () => {

  const logout = useAuthStore((state) => state.logout);
  const user = useAuthStore((state) => state.user);
  const [usersList, setUsersList] = useState<UserDetailData[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const publicFolder = process.env.REACT_APP_BACKEND_URI + "/images/";

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await searchUsers(searchQuery);
      setUsersList(data)
    }
    fetchData()
  }, [searchQuery])

  const handleSearchUsers = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  }

  return (
    <div className="h-16 bg-darkcyan flex items-center px-5">
        <div className="w-[20%]">
          <h1 className='text-white font-semibold text-2xl'>temuka</h1>
        </div>
        <div className="w-[40%] ml-10 flex justify-center">
          <input 
            type="search" 
            className='bg-white rounded-2xl px-3 py-2 w-[100%] outline-blue-200 hover:outline-blue-300 text-slate-600 font-semibold text-sm'
            onChange={handleSearchUsers}
          />
          {searchQuery ? (
            usersList.length ? (
              <div className="bg-white absolute top-14 rounded-2xl px-2 py-2 shadow-md left-50 w-[40%] flex flex-col gap-1">
                {usersList.map(user => (
                  <Link to={`/profile/${user.ID}`}>
                    <div className="flex p-1 items-center gap-2 hover:bg-slate-100 cursor-pointer rounded-md">
                      {user?.ProfilePicture === "" ? (
                        <img
                          className="h-10 w-10 object-cover rounded-full border-4 border-white"
                          src={publicFolder + "DefaultPP.jpg"}
                          alt="Default photo profile"
                        />
                      ) : 
                      (
                        <img
                          className="h-10 w-10 object-cover rounded-full border-4 border-white"
                          src={publicFolder + user?.ProfilePicture}
                          alt="User photo profile"
                        />
                      )}
                      <p className='text-slate-800 font-semibold'>{user?.Username}</p>
                    </div>
                  </Link>
                ))}
              </div>
            ): (
              <div className="bg-white absolute top-14 rounded-2xl px-2 py-2 shadow-md left-50 w-[35%]">
                <p className='text-blue-600 font-semibold text-center'>No results</p>
              </div>
            )
          ) : (
            <div></div>
          )}
        </div>
        <div className="w-[50%] flex gap-12 justify-end">
          <Link to={"/"}>
            <FaHome className='text-white hover:bg-cyan rounded-full text-4xl p-1'/>
          </Link>
          <Link to={`/communities/${Number(user?.id)}`}>
            <FaLayerGroup className='text-white hover:bg-cyan rounded-full text-4xl p-1'/>
          </Link>
          <Link to={`/profile/${Number(user?.id)}`}>
            <IoPerson className='text-white hover:bg-cyan rounded-full text-4xl p-1'/>
          </Link>
        </div>
    </div>
  );
}

export default Navbar;
