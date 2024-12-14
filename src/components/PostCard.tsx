import { BiSolidUpvote } from "react-icons/bi";
import { BiSolidDownvote } from "react-icons/bi";
import { FaCommentDots } from "react-icons/fa";
import { MdSaveAlt } from "react-icons/md";
import {useState, useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import useAuthStore from '../store/authStore';
import { PostData, UserDetailData } from '../types';
import { getUserDetail } from '../services/userService';

const PostCard: React.FC<PostData> = ({ID = '', UserID, Title, Description, Image, Upvote, Comments, CreatedAt, UpdatedAt}) => {

    // const user = useAuthStore((state) => state.user);
    const navigate = useNavigate();
    const [postUserdata, setPostUserdata] = useState<UserDetailData>();
    // const [recentLikes, setRecentLikes] = useState<number>(0);


    useEffect(()=> {
      const fetchData = async () => {
        try {
          const { data } = await getUserDetail(UserID);
          setPostUserdata(data);
        } catch(err) {
          console.log(err);
        }
      };
      fetchData();
    }, [UserID]);

    const getTimeAgo = (date: Date): string => {
      const now = new Date();
      const targetDate = new Date(date);
      const diff = now.getTime() - targetDate.getTime();

      const seconds = Math.floor(diff / 1000);
      const minutes = Math.floor(seconds / 60);
      const hours = Math.floor(minutes / 60);
      const days = Math.floor(hours / 24);
      const weeks = Math.floor(days / 7);
      const months = Math.floor(days / 30);
      const years = Math.floor(days / 365);
  
      if (years > 0) return `${years} tahun yang lalu`;
      if (months > 0) return `${months} bulan yang lalu`;
      if (weeks > 0) return `${weeks} minggu yang lalu`;
      if (days > 0) return `${days} hari yang lalu`;
      if (hours > 0) return `${hours} jam yang lalu`;
      if (minutes > 0) return `${minutes} menit yang lalu`;
      return `${seconds} detik yang lalu`;
    };

    const truncateText = (text: string): string => {
      return text.substring(0, 500) + "...";
    };


    // const getFileComponent = () => {
    //   const extension = Image?.substring(Image.lastIndexOf('.') + 1).toLowerCase()
    //   if (extension === 'png' || extension === 'jpg') {
    //     return <img src={publicFolder + Image} alt="" className="w-1/2 h-1/2" />
    //   } else if (extension === 'mp4') {
    //     return <video controls className="w-1/2 h-1/2"><source src={publicFolder + Image} type="video/mp4" /></video>
    //   } else {
    //     return null
    //   }
    // };

    const handleUpvote = async () => {
      try {
      }
      catch(err) {
        console.log(err)
      }
    };

    return (
      <div className="bg-white p-4 shadow-md rounded-lg my-5 flex flex-col gap-2 hover:bg-gray-50 cursor-pointer" key={ID} onClick={() => navigate(`/post/${ID}`)}>
        <div className="flex items-center gap-1">
          <img
              className="h-8 w-8 object-cover rounded-full  mr-2"
              src={'https://i.etsystatic.com/23207112/r/il/1d2d41/4925479274/il_fullxfull.4925479274_97lr.jpg'}
              alt="profile"
          />
          <Link 
            to={`/community`}
            className='text-slate-800 text-md font-bold'
          >
            {postUserdata?.Username}
          </Link>
          <div className="text-gray-400 font-md">
            · {getTimeAgo(CreatedAt)}
          </div>
        </div>
        <div className="flex flex-col mb-5 gap-2">
          <p className="text-slate-700 font-bold text-2xl">
              {Title}
          </p>
          <p className="text-slate-700 font-semibold">
              {truncateText(Description)}
          </p>
        </div>
        <div className='flex items-center gap-8 mt-2'>
          <div className="flex gap-5 items-center bg-gray-200 px-2 py-1 rounded-xl">
            <div className="flex gap-2 items-center">
              <BiSolidUpvote 
                className='cursor-pointer hover:scale-105 hover:text-blue-500'
              />
              <p className='font-bold text-gray-500' onClick={handleUpvote}>Vote</p>
              <p className='text-slate-600 font-bold'>{Upvote}</p>
            </div>
            <BiSolidDownvote
              className='cursor-pointer hover:scale-105 hover:text-blue-500' 
            />
          </div>
          <MdSaveAlt className='cursor-pointer hover:scale-105 hover:text-red-500 text-xl'/>
          <div className="bg-gray-200 px-2 py-1 rounded-xl flex items-center gap-2 cursor-pointer hover:opacity-80">
            <FaCommentDots className='cursor-pointer hover:scale-105 hover:text-cyan text-xl'/>
            <p className="text-slate-600 font-bold">{Comments || 0}</p>
          </div>
        </div>
      </div>
    );
  }

export default PostCard;

