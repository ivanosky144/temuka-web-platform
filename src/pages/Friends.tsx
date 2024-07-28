import React, {useContext, useState, useEffect} from 'react'
import { useParams } from 'react-router'
import Leftbar from '../components/Leftbar'
import Navbar from '../components/Navbar'
import Cover from '../components/Cover'
import { Link } from 'react-router-dom'
import useAuthStore from '../store/authStore'
import { getFollowers } from '../services/userService'
import { getFileStorage } from '../services/index'
import { FollowersData } from '../types'

const Friends: React.FC = () => {

  const user = useAuthStore((state) => state.user);
  const [friendlist, setFriendlist] = useState<FollowersData[]>();
  const { id } = useParams<string>();
  const userId = Number(id);
  const publicFolder = getFileStorage();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const payload = {
          id: id
        }
        const { data } = await getFollowers(payload);
        setFriendlist(data)
      } catch(err) {
      }
    }
    fetchData()
  }, [user?.id])

  return (
    <>
        {user?.id === id ? (
          <>
            <Navbar />
            <div className="flex">
                <Leftbar />
                <div className="p-5">
                  <p className="font-bold text-gray-600 text-xl mb-5">Your Friends</p>
                  <div className="flex flex-col gap-3">
                    {friendlist?.map((friend) => (
                      <Link to={`/profile/${friend.ID}`}>
                        <div className="flex gap-5 items-center bg-white p-4 rounded-md hover:scale-105 shadow-md">
                          {friend.ProfilePicture === "" ? 
                            (
                              <img
                                className="h-9 w-9 object-cover rounded-full  mr-2"
                                src={publicFolder + "DefaultPP.jpg"}
                                alt="user photo profile"
                              />
                            ) :
                            (
                              <img
                                className="h-9 w-9 object-cover rounded-full  mr-2"
                                src={publicFolder + friend?.ProfilePicture}
                                alt="user photo profile"
                              />
                            )
                          }
                          <div className="flex flex-col gap-1">
                            <p className='text-slate-800 font-bold'>{friend.Username}</p>
                            <p className='text-slate-500 font-medium text-xs'>{friend.Email}</p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
            </div>
          </>
        ): (
          <>
            <Navbar />
            <Cover ID={userId ?? 0}/>
            <div className="p-5">
              <p className="font-bold text-gray-600 text-xl mb-5">Friend List</p>
              {friendlist?.map((friend) => (
                <Link to={`/profile/${friend.ID}`}>
                  <div className="flex justify-between items-center bg-gray-100 p-4 rounded-md hover:scale-105">
                    <img
                      className="h-9 w-9 object-cover rounded-full  mr-2"
                      src={publicFolder + "Founder.jpg"}
                      alt="user photo profile"
                    />
                    <div className="flex flex-col gap-1">
                      <p className='text-slate-800 font-bold'>{friend.Username}</p>
                      <p className='text-slate-500 font-medium text-xs'>{friend.Email}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </>
        )}
    </>
  )
}

export default Friends
