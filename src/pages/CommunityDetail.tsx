import React from "react";
import Navbar from "../components/Navbar";
import Leftbar from "../components/Leftbar";
import Community from "../components/Community";
import Rightbar from "../components/Rightbar";

const CommunityPage: React.FC = () => {
    return (
        <>
            <Navbar />
            <div className="flex">
                <Leftbar />
                <Community />
            </div>
        </>
    );
}

export default CommunityPage;