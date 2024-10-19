import React from 'react';

const RecentPosts: React.FC = () => {
  return (
    <div className='bg-white p-5 w-[100%]'>
        <div className="flex flex-col gap-4">
            <div className="flex justify-between items-center">
                <h2 className='font-bold p-1 rounded-xl opacity-60 text-lg'>Post Terkini</h2>
                <p className='font-semibold text-darkcyan cursor-pointer'>Clear</p>
            </div>
            <div className="flex flex-col gap-2">
                <div className="flex shadow-md rounded-md p-2">
                    <div className="flex flex-col gap-2 w-[60%]">
                        <p className='text-white bg-darkcyan rounded-lg p-1 text-xs font-semibold w-[60%] text-center'>Matematika</p>
                        <h2 className='font-semibold'>Tips-tips mengerjakan UTBK Pengetahuan Numeris</h2>
                        <div className="flex justify-between">
                            <p className='text-gray-600 text-xs'>125 upvote</p>
                            <p className='text-gray-600 text-xs'>50 komentar</p>
                        </div>
                    </div>
                    <img src="" alt="" className='w-[40%]'/>
                </div>
                <div className="flex shadow-md rounded-md p-2">
                    <div className="flex flex-col gap-2 w-[60%]">
                        <p className='text-white bg-darkcyan rounded-lg p-1 text-xs font-semibold w-[60%] text-center'>KKN</p>
                        <h2 className='font-semibold'>Drama selama KKN</h2>
                        <div className="flex justify-between">
                            <p className='text-gray-600 text-xs'>400 upvote</p>
                            <p className='text-gray-600 text-xs'>180 komentar</p>
                        </div>
                    </div>
                    <img src="" alt="" className='w-[40%]'/>
                </div>
            </div>
        </div>
    </div>
  );
}

export default RecentPosts;
