import React, { useState } from 'react'
import { IoClose } from "react-icons/io5";
import PostCustomDropdown from './PostCustomDropdown';
import { createPost } from '../services/postService';
import useAuthStore from '../store/authStore';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

enum PostTypeOption {
    Text = "text",
    Media = "media",
    Poll = "poll",
    AMA = "ama",
}
interface FormData {
    user_id: number | null
    title: string
    description: string
}


const PostSubmitForm: React.FC = () => {

    const navigate = useNavigate();
    const user = useAuthStore((state) => state.user);
    const [option, setOption] = useState<PostTypeOption>(PostTypeOption.Text);
    const [postData, setData] = useState<FormData>({
        user_id: Number(user?.id),
        title: "",
        description: "",
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value }= e.target;
        setData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await createPost(postData);
        navigate("/");
    };

    return (
        <div className='bg-white p-3 rounded-md w-[40%]'>
            <div className="flex flex-col gap-4 px-2">
                <div className="flex items-center justify-between relative py-1">
                    <h1 className="absolute left-1/2 transform -translate-x-1/2 font-semibold text-center pt-1 text-xl">
                        Buat post
                    </h1>
                    <div></div>
                    <Link to={"/"}>
                        <IoClose className="text-2xl hover:bg-gray-100 rounded-full cursor-pointer" />
                    </Link>
                </div>
                <hr className='border-t-2 border-gray-300'></hr>
                <PostCustomDropdown />
                <div className="flex gap-4 ">
                    <h2 className='p-2 rounded-sm hover:bg-gray-200 cursor-pointer font-semibold' onClick={() => setOption(PostTypeOption.Text)}>Teks</h2>
                    <h2 className='p-2 rounded-sm hover:bg-gray-200 cursor-pointer font-semibold' onClick={() => setOption(PostTypeOption.Media)}>Gambar & video</h2>
                    <h2 className='p-2 rounded-sm hover:bg-gray-200 cursor-pointer font-semibold' onClick={() => setOption(PostTypeOption.Poll)}>Poll</h2>
                    <h2 className='p-2 rounded-sm hover:bg-gray-200 cursor-pointer font-semibold' onClick={() => setOption(PostTypeOption.AMA)}>AMA</h2>
                </div>
                <form action="" className='p-2 flex flex-col gap-4' onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        placeholder='Judul' 
                        name='title'
                        className='p-2 rounded-md border-gray-100 outline-none border-2'
                        value={postData.title}
                        onChange={handleInputChange}
                    />
                    {option === PostTypeOption.Text ? 
                        <textarea 
                            rows={5} 
                            name="description" 
                            placeholder='Deskripsi' 
                            className='p-2 rounded-md outline-none border-gray-100 border-2' 
                            value={postData.description}
                            onChange={handleInputChange}
                        /> :
                    option === PostTypeOption.Media ? 
                        <></> : 
                    option === PostTypeOption.Poll ?
                        <></> :
                        <></>}
                    <button className='bg-darkcyan p-2 rounded-md text-white font-semibold hover:opacity-80 flex-end' type='submit'>Unggah</button>
                </form>
            </div>
        </div>
    );
}

export default PostSubmitForm;