import React from 'react';
import Share from './Share';
import { Link } from 'react-router-dom';

const CreatePost: React.FC = () => {
  return (
    <div className='bg-white p-5 w-[100%] text-center'>
        <div className="font-semibold py-2 px-3 bg-darkcyan rounded-lg cursor-pointer hover:opacity-80 text-white">
          <Link to={'/submit'}>
            Buat post +
          </Link>
        </div>
    </div>
  );
}

export default CreatePost;
