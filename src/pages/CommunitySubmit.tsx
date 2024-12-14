import React from 'react'
import Navbar from '../components/Navbar';
import Leftbar from '../components/Leftbar';
import PostSubmitForm from '../components/PostSubmitForm';

const CommunitySubmit: React.FC = () => {

    return (
        <>
            <Navbar />
            <div className="flex pt-16">
                <Leftbar />
                <div className="fixed inset-0 bg-black bg-opacity-50 z-10"></div>
                <div className="fixed inset-0 flex items-center justify-center z-20">
                    <PostSubmitForm />
                </div>
            </div>
        </>  
    );
}

export default CommunitySubmit;