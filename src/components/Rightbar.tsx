import React from 'react';
import Share from './Share';
import CreatePost from './CreatePost';
import { FaChevronDown } from "react-icons/fa";
import { FaHatCowboy } from "react-icons/fa6";
import RecentPosts from './RecentPosts';

const Rightbar: React.FC = () => {
  return (
    <div className='w-[20%] bg-white p-5 fixed right-0'>
      <div className="flex justify-between w-[100%] items-center gap-2 cursor-pointer hover:bg-gray-50 p-2 rounded-md">
        <div className="flex gap-3 items-center">
          <FaHatCowboy className='text-darkcyan text-4xl border-2 border-darkcyan rounded-full'/>
          <div className="flex flex-col">
            <p className='text-xs font-semibold text-gray-500'>Identitas kamu sebagai pembuat post</p>
            <p className='font-semibold text-lg'>Mahasiswa Universitas Gadjah Mada</p>
          </div>
        </div>
        <FaChevronDown />
      </div>
      <CreatePost />
      <RecentPosts />
    </div>
  );
}

export default Rightbar;
