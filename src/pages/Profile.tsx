import React from 'react';
import { useParams } from 'react-router';
import Leftbar from '../components/Leftbar';
import Navbar from '../components/Navbar';
import ProfileFeed from '../components/ProfileFeed';

const Profile: React.FC = () => {

  const { id } = useParams<string>();

  return (
    <>
        <Navbar />
        <div className="flex">
            <Leftbar />
            <ProfileFeed ID={1 ?? ''}/>
        </div>
    </>
  );
}

export default Profile;
