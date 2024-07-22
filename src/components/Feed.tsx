import React, { useEffect, useState, useContext } from 'react'
import Post from './Post'
import Share from './Share'
import { PostData } from '../types'
import { getTimelinePosts } from '../services/postService'
import useAuthStore from '../store/authStore'


const Feed: React.FC = () => {

  const [posts, setPosts] = useState<PostData[]>([]);
  const user = useAuthStore((state) => state.user);


  useEffect(()=> {
    const fetchData = async () => {
      try {
        const { data } = await getTimelinePosts(Number(user?.id))
        setPosts(data)
      } catch(err){
      }
    }
    fetchData()
  }, [])
    

  return (
    <div className='w-[60%] bg-gray-50 min-h-screen px-5 py-8'>
      <Share />
      {posts.map((p) => (
        <Post 
          _id={p._id || ""}
          userId={p.userId}
          desc={p.desc}
          image={p?.image || ""}
          likes={p.likes || []}
          createdAt = {p.createdAt || new Date}
        />
      ))}
    </div>
  )
}

export default Feed
