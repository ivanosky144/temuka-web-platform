import React, {useEffect, useState} from 'react';
import Share from './Share';
import Post from './Post';
import Cover from './Cover';
import { PostData, ProfileID } from '../types';
import { getTimelinePosts } from '../services/postService';
import useAuthStore from '../store/authStore';


const ProfileFeed: React.FC<ProfileID> = ({ID}) => {

    const [posts, setPosts] = useState<PostData[]>([]); 
    const user = useAuthStore((state) => state.user);

    useEffect(()=> {
        const fetchData = async () => {
          try {
              const { data } = await getTimelinePosts(ID)
              setPosts(data)
          } catch(err){
              console.log(err)
          }
        };
        fetchData();
    }, []);

  return (
    <div className='bg-gray-50 min-h-screen w-full flex-1 px-5 py-8'>
      <Cover ID={ID ?? ''}/>
      {user?.id === ID ? (
        <Share />
      ) : (
        <div></div>
      )}
      {posts.map((p) => (
        <Post 
          UserID={p.UserID}
          Title={p.Title}
          Description={p.Description}
          Image={p.Image}
          Upvote={p.Upvote}
          CreatedAt={p.CreatedAt}
          UpdatedAt={p.UpdatedAt}
        />
      ))}
    </div>
  );
}

export default ProfileFeed;
