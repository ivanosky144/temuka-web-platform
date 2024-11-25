import React from 'react';
import Feed from '../components/Feed';
import Leftbar from '../components/Leftbar';
import Navbar from '../components/Navbar';
import Rightbar from '../components/Rightbar';

const Home: React.FC = () => {
  return (
    <>
        <Navbar />
        <div className="flex pt-16">
            <Leftbar />
            <div className="mx-[20%] w-[100%]">
              <Feed />
            </div>
            <Rightbar />
        </div>
    </>
  );
}

export default Home;
