import React, { useEffect, useState, useRef, RefObject } from 'react';
import { createPost } from '../services/postService';
import useAuthStore from '../store/authStore';


const Share: React.FC = () => {

  const [file, setFile] = useState<File | null>();
  const title: RefObject<HTMLInputElement> = useRef(null);
  const desc: RefObject<HTMLTextAreaElement> = useRef(null);
  const user = useAuthStore((state) => state.user);

  interface NewPost {
    userId: number | undefined 
    title: string
    desc: string
    image?: string
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const newPost: NewPost = {
      userId: user?.id,
      title: title.current?.value!,
      desc: desc.current?.value!
    }
    if(file){
      try {
        const formData = new FormData()
        formData.append('file', file)
        newPost.image = file.name
      } catch(err) {
      }
    } else {
    }

    try {
      const res = await createPost(newPost)
      if(res) {
      }
      else {
      }
    } catch(err){
    }
  }

  return (
    <div className="bg-white p-4 shadow-md rounded-lg">
      <div className="flex items-center mb-4">
        <div className="bg-blue-500 rounded-full w-8 h-8 mr-2"></div>
        <div className="font-bold text-gray-700">You</div>
      </div>
      <input 
        type="text" 
        className="w-full mb-4 px-4 py-2 rounded-lg border focus:outline-none focus:ring focus:border-blue-500 font-semibold"
        placeholder="Title"
        ref={title}/>
      <textarea
        className="w-full mb-4 px-4 py-2 rounded-lg border focus:outline-none focus:ring focus:border-blue-500 font-semibold"
        placeholder="Description"
        ref={desc}
        rows={4}>
      </textarea>
       {file && (
        <div className="text-blue-700 py-1 rounded-md w-[20%] font-bold text-lg">{file.name}</div>
       )} 
       <div className="flex justify-between items-center">
        <label 
          className="block bg-darkcyan text-white font-semibold rounded-lg px-4 py-2 cursor-pointer hover:bg-midcyan transform transition-transform hover:-translate-y-1"
          htmlFor='fileinput'
        >
          Upload File
          <input 
            type="file" 
            className="hidden" 
            onChange={(e) => setFile(e.target.files?.[0])}
            id='fileinput'
          />
        </label>
        <form action="" onClick={handleSubmit}>
          <button
            className="block bg-cyan text-white font-semibold rounded-lg px-3 py-2 cursor-pointer hover:bg-midcyan transform transition-transform hover:-translate-y-1"
            type='submit'>
            Post
          </button>
        </form>
       </div>
    </div>
  );
}

export default Share;