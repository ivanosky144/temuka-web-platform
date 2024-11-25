import React from "react";
import Navbar from "../components/Navbar";
import Leftbar from "../components/Leftbar";
import Community from "../components/Community";
import Rightbar from "../components/Rightbar";

const CommunityPage: React.FC = () => {
    return (
        <>
            <Navbar />
            <div className="flex pt-16">
                <Leftbar />
                <div className="mx-[20%] w-[100%]">
                    <Community />
                </div>
            </div>
        </>
    );
}

export default CommunityPage;