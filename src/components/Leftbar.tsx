import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import { IoSettings } from "react-icons/io5"
import { FaLayerGroup } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
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
        const { data } = await getUserDetail(1);
        console.log(data);
        setUserdata(data);
      } catch(err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);

  return (
    <div className='w-[20%] p-4 flex flex-col gap-8 bg-gray-50 mt-5'>
      <div className="flex flex-col gap-4">
        <div className="px-3 rounded-md hover:bg-white cursor-pointer py-2">
            <div className="flex items-center gap-5">
                <FaHome className='text-darkcyan'/>
                <Link to={`/`}>
                  <p className='text-darkcyan font-semibold text-md'>Feed</p>
                </Link>
            </div>
        </div>
        <div className="px-3 rounded-md hover:bg-white cursor-pointer py-2">
            <div className="flex items-center gap-5">
                <IoPerson className='text-darkcyan'/>
                <Link to={`/profile/${Number(user?.id)}`}>
                  <p className='text-darkcyan font-semibold text-md'>Profile</p>
                </Link>
            </div>
        </div>
        <div className="px-3 rounded-md hover:bg-white cursor-pointer py-2">
            <div className="flex items-center gap-5">
                <FaLayerGroup className='text-darkcyan'/>
                <Link to={`/communities/${user?.id}`}>
                  <p className='text-darkcyan font-semibold text-md'>Communities</p>
                </Link>
            </div>
        </div>
        <div className="px-3 rounded-md hover:bg-white cursor-pointer py-2">
            <div className="flex items-center gap-5">
                <IoSettings className='text-darkcyan'/>
                <Link to={`/settings`}>
                  <p className='text-darkcyan font-semibold text-md'>Settings</p>
                </Link>
            </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className='text-gray-500 font-semibold text-xl'>Communities</h2>
        <div className="flex flex-col gap-4">
          <div className="px-3 rounded-md hover:bg-white cursor-pointer py-2">
              <div className="flex items-center gap-5">
                  <SiLibreofficemath className='text-darkcyan'/>
                  <Link to={`/community/Mathematics`}>
                    <p className='text-darkcyan font-semibold text-md'>Mathematics</p>
                  </Link>
              </div>
          </div>
          <div className="px-3 rounded-md hover:bg-white cursor-pointer py-2">
              <div className="flex items-center gap-5">
                  <PiBooksFill className='text-darkcyan'/>
                  <Link to={`/community/Physics`}>
                    <p className='text-darkcyan font-semibold text-md'>Physics</p>
                  </Link>
              </div>
          </div>
          <div className="px-3 rounded-md hover:bg-white cursor-pointer py-2">
              <div className="flex items-center gap-5">
                  <FaComputer className='text-darkcyan'/>
                  <Link to={`/community/ComputerScience`}>
                    <p className='text-darkcyan font-semibold text-md'>Computer Science</p>
                  </Link>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Leftbar;
