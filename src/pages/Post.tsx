import React, { useEffect, useState } from 'react';
import Leftbar from '../components/Leftbar';
import Navbar from '../components/Navbar';
import { PostData, PostCommentData } from '../types';
import { useNavigate, useParams } from 'react-router';
import { getPostDetail } from '../services/postService';
import { FaCircleChevronLeft } from "react-icons/fa6";
import { BiSolidDownvote, BiSolidUpvote } from 'react-icons/bi';
import { FaComment } from "react-icons/fa";
import useAuthStore from '../store/authStore';
import { addComment } from '../services/commentService';

interface UserData {
    Username: string
    ProfilePicture: string
}

interface PostDetail {
    user: UserData
    post: PostData
    comments: PostCommentData[]
}

interface CommentAddData {
    user_id: number | null
    parent_id: number | null
    post_id: number
    content: string
}

const Post: React.FC = () => {

    const { id } = useParams();
    const navigate = useNavigate();
    const user = useAuthStore((state) => state.user);
    const [postData, setPostData] = useState<PostDetail>();
    const [comment, setComment] = useState<CommentAddData>({
        user_id: Number(user?.id),
        post_id: postData?.post.ID,
        parent_id: null,
        content: "",
    });
    const [isFocused, setIsFocused] = useState<boolean>(false);

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await getPostDetail(Number(id));
            setPostData(data);
        };
        fetchData();
    }, [id]);

    const handleCommentChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value }= e.target;
        setComment((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleAddComment = async (e: React.FormEvent) => {
        e.preventDefault();
        await addComment(comment);
    };

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

    return (
        <>
            <Navbar />
            <div className="flex pt-16">
                <Leftbar />
                <div className="mx-[20%] w-[100%] py-5 px-8 flex gap-2 bg-gray-50">
                    <FaCircleChevronLeft className='text-darkcyan w-8 h-8 hover:text-midcyan cursor-pointer' onClick={() => navigate("/")}/>
                    <div className='flex flex-col gap-1 w-[80%]'>
                        <div className="flex items-center gap-1 cursor-pointer">
                            <img
                                className="h-8 w-8 object-cover rounded-full"
                                src={postData?.user.ProfilePicture || "/assets/DefaultUser.png"}
                                alt="profile"
                            />
                            <p className='text-sm font-semibold'>{postData?.user.Username}</p>
                        </div>
                        <h2 className='font-semibold text-2xl'>{postData?.post.Title}</h2>
                        <p className='text-sm mt-4'>{postData?.post.Description}</p>
                        <div className="flex gap-5 items-center bg-gray-200 px-2 py-1 rounded-xl w-[15%] mt-3">
                            <div className="flex gap-1 items-center">
                                <BiSolidUpvote 
                                    className='cursor-pointer hover:scale-105 hover:text-blue-500'
                                />
                                <p className='text-slate-600 font-bold'>{postData?.post.Upvote || 0}</p>
                            </div>
                            <BiSolidDownvote
                                className='cursor-pointer hover:scale-105 hover:text-blue-500' 
                            />
                        </div>
                        <div className="flex flex-col mt-4">
                            {isFocused ? <form className='flex flex-col border-2 border-gray-500 text-gray-500 rounded-lg bg-gray-50 p-2' onSubmit={handleAddComment}>
                                <input
                                    type="text"
                                    name="content"
                                    className="bg-gray-50 outline-none text-black"
                                    value={comment.content}
                                    onChange={handleCommentChange}
                                />                                
                                <div className="flex justify-end gap-2">
                                    <button className='bg-gray-500 rounded-xl px-2 py-1 text-white text-xs cursor-pointer' onClick={() => setIsFocused(false)}>Batalkan</button>
                                    <button type="submit" className='bg-darkcyan rounded-xl px-2 py-1 text-white text-xs cursor-pointer'>Komen</button>
                                </div>
                            </form> : <>
                                <input type="text" placeholder='Tambahkan komen' className='border-2 border-gray-500 text-gray-500 rounded-lg bg-gray-50 p-2' onClick={() => setIsFocused(true)}/>
                            </>}
                            <div className="flex flex-col mt-8 gap-5">
                                {postData?.comments.map((comment) => (
                                    <div className="flex flex-col">
                                        <div className="flex gap-1 items-center">
                                            <img src="/assets/DefaultUser.png" alt="" className='w-6 h-6 border-black border-2 rounded-full'/>
                                            <div className="flex gap-1 items-center">
                                                <p className='text-sm font-semibold'>{comment.Username}</p>
                                                ·
                                                <p className='text-sm font-semibold text-gray-400'>{getTimeAgo(comment.CreatedAt)}</p>
                                            </div>
                                        </div>
                                        <div className="ml-7 mt-2">
                                            <div className='text-sm'>{comment.Content}</div>
                                            <div className="flex gap-4 items-center w-[30%] mt-2">
                                                <div className="flex gap-1 items-center">
                                                    <BiSolidUpvote 
                                                        className='cursor-pointer hover:scale-105 hover:text-blue-500'
                                                    />
                                                    <p className='text-slate-600 font-bold text-xs'>{comment.Votes || 0}</p>
                                                </div>
                                                <BiSolidDownvote
                                                    className='cursor-pointer hover:scale-105 hover:text-blue-500' 
                                                />
                                                <div className="flex gap-1  items-center cursor-pointer">
                                                    <FaComment className='text-sm'/>
                                                    <p className='text-xs font-semibold'>Balas</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Post;
