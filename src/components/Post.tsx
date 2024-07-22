import ThumbUp from '@mui/icons-material/ThumbUp'
import Favorite from '@mui/icons-material/Favorite'
import {useState, useEffect, useContext} from 'react'
import axios from 'axios'
import {format} from 'timeago.js'
import { Link } from 'react-router-dom'
import useAuthStore from '../store/authStore'
import { PostData, UserDetailData } from '../types'
import { getUserDetail } from '../services/userService'
import { getPostDetail, likePost } from '../services/postService'

const Post: React.FC<PostData> = ({_id = '', userId, desc, image, likes, createdAt}) => {

    const user = useAuthStore((state) => state.user);
    const currentUserID = user?.id;
    const publicFolder = process.env.REACT_APP_BACKEND_URI + "/images/";
    const [postUserdata, setPostUserdata] = useState<UserDetailData>();

    const [recentLikes, setRecentLikes] = useState<number>(0);
    const [loading, setLoading] = useState(false);

    useEffect(()=> {
      const fetchData = async () => {
        try {
          const { data } = await getUserDetail(Number(currentUserID));
          setPostUserdata(data)
        } catch(err) {
          console.log(err)
        }
      }
      fetchData()
    }, [])

    useEffect(() => {
      const fetchData = async () => {
        try {
          const { data } = await getPostDetail(Number(_id))
          setRecentLikes(data.likes?.length ?? 0)
        } catch(err) {
          console.log(err)
        }
      }
      fetchData()
    }, [loading])

    const getFileComponent = () => {
      const extension = image?.substring(image.lastIndexOf('.') + 1).toLowerCase()
      if (extension === 'png' || extension === 'jpg') {
        return <img src={publicFolder + image} alt="" className="w-1/2 h-1/2" />
      } else if (extension === 'mp4') {
        return <video controls className="w-1/2 h-1/2"><source src={publicFolder + image} type="video/mp4" /></video>
      } else {
        return null
      }
    }

    const handleLike = async () => {
      try {
        setLoading(!loading)
      }
      catch(err) {
        console.log(err)
      }
    }

    return (
      <div className="bg-white p-4 shadow-md rounded-lg my-5 flex flex-col gap-2">
        <div className="flex items-center mb-4 gap-2">
          <img
              className="h-12 w-12 object-cover rounded-full  mr-2"
              src={publicFolder + postUserdata?.profilePicture}
              alt="user photo profile"
          />
          <div className="flex flex-col gap-0.5">
            <Link 
              to={`/profile/${userId}`}
              className='text-slate-800 text-md font-bold'
            >
              {postUserdata?.username}
            </Link>
            <div className="text-gray-400 font-md">
                {createdAt && format(new Date(createdAt).toLocaleString())}
            </div>
          </div>
        </div>
        <p className="mb-5 text-slate-700 font-semibold">
            {desc}
        </p>
        {image && getFileComponent()}
        <div className='flex items-center gap-5 mt-2'>
          <div className="flex gap-1 items-center">
            <ThumbUp 
              className='cursor-pointer hover:scale-105 hover:text-blue-500'
              onClick={handleLike}
            />
            <p className='text-slate-600 text-sm font-semibold'>{recentLikes}</p>
          </div>
            <Favorite className='cursor-pointer hover:scale-105 hover:text-red-500'/>
        </div>
      </div>
    )
  }

export default Post

//655b7cbc6c85a7d7e061ab38