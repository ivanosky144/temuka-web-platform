import React, { useState } from 'react'
import { FaChevronDown } from 'react-icons/fa';
import { IoClose } from "react-icons/io5";
import PostCustomDropdown from './PostCustomDropdown';

enum PostTypeOption {
    Text = "text",
    Media = "media",
    Poll = "poll",
    AMA = "ama",
}


const PostSubmitForm: React.FC = () => {

    const [option, setOption] = useState<PostTypeOption>(PostTypeOption.Text);

    return (
        <div className='bg-white p-3 rounded-md w-[40%]'>
            <div className="flex flex-col gap-4 px-2">
                <div className="flex items-center justify-between relative py-1">
                    <h1 className="absolute left-1/2 transform -translate-x-1/2 font-semibold text-center pt-1 text-xl">
                        Buat post
                    </h1>
                    <div></div>
                    <IoClose className="text-2xl hover:bg-gray-100 rounded-full cursor-pointer" />
                </div>
                <hr className='border-t-2 border-gray-300'></hr>
                <PostCustomDropdown />
                <div className="flex gap-4 ">
                    <h2 className='p-2 rounded-sm hover:bg-gray-200 cursor-pointer font-semibold' onClick={() => setOption(PostTypeOption.Text)}>Teks</h2>
                    <h2 className='p-2 rounded-sm hover:bg-gray-200 cursor-pointer font-semibold' onClick={() => setOption(PostTypeOption.Media)}>Gambar & video</h2>
                    <h2 className='p-2 rounded-sm hover:bg-gray-200 cursor-pointer font-semibold' onClick={() => setOption(PostTypeOption.Poll)}>Poll</h2>
                    <h2 className='p-2 rounded-sm hover:bg-gray-200 cursor-pointer font-semibold' onClick={() => setOption(PostTypeOption.AMA)}>AMA</h2>
                </div>
                <form action="" className='p-2 flex flex-col gap-4'>
                    <input type="text" placeholder='Judul' className='p-2 rounded-md border-gray-100 outline-none border-2'/>
                    {option == PostTypeOption.Text ? 
                        <textarea rows={5} name="" id="" placeholder='Deskripsi' className='p-2 rounded-md outline-none border-gray-100 border-2'>
                        </textarea> :
                    option == PostTypeOption.Media ? 
                        <></> : 
                    option == PostTypeOption.Poll ?
                        <></> :
                        <></>}
                    <button className='bg-darkcyan p-2 rounded-md text-white font-semibold hover:opacity-80 flex-end'>Unggah</button>
                </form>
            </div>
        </div>
    );
}

export default PostSubmitForm;