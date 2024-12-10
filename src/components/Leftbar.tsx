import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import { IoSettings } from "react-icons/io5"
import { FaLayerGroup } from "react-icons/fa";
import { FaUniversity } from "react-icons/fa";
import { IoSchool } from "react-icons/io5";
import useAuthStore from '../store/authStore';
import { getUserDetail } from '../services/userService';
import { UserDetailData } from '../types';
import { SiLibreofficemath } from "react-icons/si";
import { FaComputer } from "react-icons/fa6";
import { PiBooksFill } from "react-icons/pi";


const Leftbar: React.FC = () => {

  const publicFolder = process.env.REACT_APP_BACKEND_URI + "/images/";
  const [userdata, setUserdata] = useState<UserDetailData>();
  const user = useAuthStore((state) => state.user);


  useEffect(()=> {
    const fetchData = async () => {
      try {
        // const { data } = await getUserDetail(1);
        // setUserdata(data);
      } catch(err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);

  return (
    <div className='w-[20%] p-4 flex flex-col gap-8 bg-white mt-5 fixed'>
      <div className="flex flex-col gap-4">
        <div className="px-3 rounded-md hover:bg-gray-100 hover:scale-1.05 cursor-pointer py-2">
            <div className="flex items-center gap-5">
                <FaHome className='text-darkcyan'/>
                <Link to={`/`}>
                  <p className='text-darkcyan font-bold text-lg'>Beranda</p>
                </Link>
            </div>
        </div>
        <div className="px-3 rounded-md hover:bg-gray-100 cursor-pointer py-2">
            <div className="flex items-center gap-5">
                <FaLayerGroup className='text-darkcyan'/>
                <Link to={`/communities`}>
                  <p className='text-darkcyan font-bold text-lg'>Komunitas</p>
                </Link>
            </div>
        </div>
        <div className="px-3 rounded-md hover:bg-gray-100 cursor-pointer py-2">
            <div className="flex items-center gap-5">
                <FaUniversity className='text-darkcyan'/>
                <Link to={`/universities`}>
                  <p className='text-darkcyan font-bold text-lg'>Universitas</p>
                </Link>
            </div>
        </div>
        <div className="px-3 rounded-md hover:bg-gray-100 cursor-pointer py-2">
            <div className="flex items-center gap-5">
                <IoSchool className='text-darkcyan'/>
                <Link to={`/majors`}>
                  <p className='text-darkcyan font-bold text-lg'>Prodi</p>
                </Link>
            </div>
        </div>
        <div className="px-3 rounded-md hover:bg-gray-100 cursor-pointer py-2">
            <div className="flex items-center gap-5">
                <IoSettings className='text-darkcyan'/>
                <Link to={`/settings`}>
                  <p className='text-darkcyan font-bold text-lg'>Pengaturan</p>
                </Link>
            </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className='font-bold p-1 opacity-60 text-lg'>Komunitas</h2>
        <div className="flex flex-col gap-4">
          <div className="px-3 rounded-md hover:bg-gray-100 cursor-pointer py-2">
              <div className="flex items-center gap-5">
                  <SiLibreofficemath className='text-darkcyan'/>
                  <Link to={`/community/Mathematics`}>
                    <p className='text-darkcyan font-bold text-lg'>Matematika</p>
                  </Link>
              </div>
          </div>
          <div className="px-3 rounded-md hover:bg-gray-100 cursor-pointer py-2">
              <div className="flex items-center gap-5">
                  <PiBooksFill className='text-darkcyan'/>
                  <Link to={`/community/Physics`}>
                    <p className='text-darkcyan font-bold text-lg'>Fisika</p>
                  </Link>
              </div>
          </div>
          <div className="px-3 rounded-md hover:bg-gray-100 cursor-pointer py-2">
              <div className="flex items-center gap-5">
                  <FaComputer className='text-darkcyan'/>
                  <Link to={`/community/ComputerScience`}>
                    <p className='text-darkcyan font-bold text-lg'>Ilmu Komputer</p>
                  </Link>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Leftbar;
