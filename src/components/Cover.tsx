import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { followUser, getUserDetail } from '../services/userService';
import { ProfileID, UserDetailData } from '../types';
import useAuthStore from '../store/authStore';

const Cover: React.FC<ProfileID> = ({ID}) => {

  const [userdata, setUserdata] = useState<UserDetailData>();
  const [loading, setLoading] = useState(false);
  const user = useAuthStore((state) => state.user);

  const publicFolder = process.env.REACT_APP_BACKEND_URI + "/images/";

  useEffect(()=> {
    const fetchData = async () => {
      try {
        const { data } = await getUserDetail(1);
        setUserdata(data);
      } catch(err) {
        console.log(err);
      }
    }
    fetchData();
  }, [loading]);

  const handleFollow = async () => {
    try {
      setLoading(!loading);
    } catch(err) {
    }
  };

  const handleUnfollow = async () => {
    try {

      setLoading(!loading);
    } catch(err) {
    }
  };

  return (
    <div className="bg-white mb-5 shadow-md flex justify-between p-2">
      <div className="flex flex-col gap-5">
        <div className="flex items-center">
            <img
                className="h-32 w-32 object-cover rounded-full border-4 border-white"
                src={'https://t3.ftcdn.net/jpg/02/43/51/48/360_F_243514868_XDIMJHNNJYKLRST05XnnTj0MBpC4hdT5.webp'}
                alt="Top Image"
                style={{ zIndex: 1 }}
            />
          <div className="px-4 h-30">
              <h1 className="text-2xl text-slate-800 font-bold mb-2">{userdata?.Username}</h1>
              <p className="text-slate-600 font-semibold bg-gray-500 p-1 rounded-md text-white inline-block">{userdata?.Displayname}</p>
              <p className='text-slate-500 text-md font-medium'>{userdata?.Desc}</p>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className='flex items-center gap-5 justify-center'>
            {user?.id !== Number(ID) && (
              <div className="px-4 ml-2 h-30 pb-5">
                {userdata?.Followers?.includes(Number(user?.id)) ? (
                  <button className='bg-darkcyan rounded-lg px-3 py-2 text-white font-semibold transform transition-transform hover:bg-midcyan' onClick={handleUnfollow}>Unfollow</button>
                ) : (
                  <button className='bg-darkcyan rounded-lg px-3 py-2 text-white font-semibold transform transition-transform hover:bg-midcyan' onClick={handleFollow}>Follow</button>
                )}
                <Link to={`/friends/${ID}`} className='bg-gray-200 rounded-md px-3 py-2 ml-3 font-semibold text-slate-800 transform transition-transform hover:-translate-y-1'>Chat</Link>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="flex gap-8 p-5 items-center">
        <div className="flex flex-col gap-2">
          <p className='font-bold text-2xl'>Points</p>
          <p className='font-medium text-lg text-gray-400'>200</p>
        </div>
        <div className="flex flex-col gap-2">
          <p className='font-bold text-2xl'>Posts</p>
          <p className='font-medium text-lg text-gray-400'>5</p>
        </div>
        <div className="flex flex-col gap-2">
          <p className='font-bold text-2xl'>Followers</p>
          <p className='font-medium text-lg text-gray-400'>23</p>
        </div>
      </div>
    </div>
  );
}

export default Cover;
