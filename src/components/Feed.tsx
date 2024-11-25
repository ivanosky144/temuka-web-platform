import React, { useEffect, useState } from 'react'
import { PostData } from '../types'
import { getTimelinePosts } from '../services/postService'
import useAuthStore from '../store/authStore'
import PostCard from './PostCard'


const Feed: React.FC = () => {

  const [posts, setPosts] = useState<PostData[]>([]);
  const user = useAuthStore((state) => state.user);


  useEffect(()=> {
    const fetchData = async () => {
      try {
        const { data } = await getTimelinePosts(1);
        console.log("data", data)
        setPosts(data);
      } catch(err){
      }
    }
    fetchData();
  }, []);
    

  return (
    <div className='w-[100%] bg-gray-50 min-h-screen px-5 py-8'>
      
      {posts.map((p) => (
        <PostCard
          ID={p.ID || ""}
          UserID={p.UserID}
          Title={p.Title}
          Description={p.Description}
          Image={p?.Image || ""}
          Upvote={p.Upvote || []}
          CreatedAt={p.CreatedAt || new Date}
          UpdatedAt={p.UpdatedAt || new Date}
        />
      ))}
    </div>
  );
}

export default Feed;
