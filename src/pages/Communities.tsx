import React from 'react'
import Navbar from '../components/Navbar';
import Leftbar from '../components/Leftbar';

const Community: React.FC = () => {
  return (
        <>
            <Navbar />
            <div className="flex pt-16">
                <Leftbar />
            </div>
        </>  
    );
}

export default Community;