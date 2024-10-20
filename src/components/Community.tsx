import React from "react";
import PostCard from "./PostCard";
import { RiTeamLine } from "react-icons/ri";
import { GrNotes } from "react-icons/gr";
import { TbMessageCircleQuestion } from "react-icons/tb";
import { FaChevronDown } from "react-icons/fa";

const Community: React.FC = () => {
    return (
        <div className="w-[80%]">
            <div className="flex flex-col p-3 relative w-[90%]">
                <img 
                    src="https://t4.ftcdn.net/jpg/02/00/11/87/360_F_200118749_rA5PKAUDD0xeB44ZstUclNdevoGsvnwd.jpg" 
                    alt=""
                    className="h-[250px] rounded-lg"
                />
                <img
                    className="h-32 w-32 object-cover rounded-3xl mr-2 absolute p-2 bg-white bottom-[-30px] left-[50px]"
                    src={'https://i.etsystatic.com/23207112/r/il/1d2d41/4925479274/il_fullxfull.4925479274_97lr.jpg'}
                    alt="user photo profile"
                />
                <div className="flex justify-between ml-[180px] mt-2 relative">
                    <h1 className="font-bold text-3xl">Matematika</h1>
                    <div className="flex gap-2 items-center">
                        <button className="bg-darkcyan rounded-xl py-2 w-[100px] font-bold text-white shadow-md hover:opacity-80">Join</button>
                        <button className="bg-yellow rounded-xl py-2 w-[150px] font-bold text-darkcyan shadow-md hover:opacity-90">Buat Post</button>
                    </div>
                </div>
            </div>
            <div className="flex mt-10 w-[90%] p-4">
                <div className="flex flex-col w-[70%]">
                    <PostCard />
                </div>
                <div className="flex flex-col gap-5 w-[30%]">
                    <div className="bg-gray-100 opacity-90 m-3 p-3 rounded-lg shadow-md">
                        <h3 className="text-3xl font-bold mb-5">About</h3>
                        <p className="font-bold text-lg">Tempat buat kalian yang mencintai Matematika dan bidang-bidang turunannya</p>
                        <div className="flex w-[40%] justify-between mt-5">
                            <div className="flex flex-col">
                                <p className="font-extrabold text-xl">10k</p>
                                <p className="font-semibold text-md">Pengikut</p>
                            </div>
                            <div className="flex flex-col">
                                <p className="font-extrabold text-xl">100</p>
                                <p className="font-semibold text-md">Post</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-green-600 text-4xl">●</span>
                            <p className="font-semibold mt-2">55 Anggota sedang aktif</p>
                        </div>
                    </div>
                    <div className="bg-gray-100 opacity-90 m-3 p-3 rounded-lg shadow-md">
                        <h3 className="text-3xl font-bold mb-5">Resources</h3>
                        <div className="flex flex-col gap-2">
                            <div className="flex justify-between px-2 py-1 hover:bg-[rgba(0,139,139,0.1)] rounded-lg cursor-pointer items-center">
                                <div className="flex gap-2 items-center">
                                    <GrNotes />
                                    <p className="font-semibold">Peraturan</p>
                                </div>
                                <FaChevronDown />
                            </div>
                            <div className="flex justify-between px-2 py-1 hover:bg-[rgba(0,139,139,0.1)] rounded-lg cursor-pointer items-center">
                                <div className="flex gap-2 items-center">
                                    <RiTeamLine />
                                    <p className="font-semibold">Moderator</p>
                                </div>
                                <FaChevronDown />
                            </div>
                            <div className="flex justify-between px-2 py-1 hover:bg-[rgba(0,139,139,0.1)] rounded-lg cursor-pointer items-center">
                                <div className="flex gap-2 items-center">
                                    <TbMessageCircleQuestion />
                                    <p className="font-semibold">FAQ</p>
                                </div>
                                <FaChevronDown />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Community;