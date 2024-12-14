import React from 'react';
import { useParams } from 'react-router';
import Leftbar from '../components/Leftbar';
import Navbar from '../components/Navbar';

const Profile: React.FC = () => {


  return (
    <>
        <Navbar />
        <div className="flex pt-16">
            <Leftbar />
        </div>
    </>
  );
}

export default Profile;
