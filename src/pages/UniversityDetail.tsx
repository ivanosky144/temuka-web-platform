import { useEffect, useState } from "react";
import { UniversityData } from "../types";
import Navbar from "../components/Navbar";
import Leftbar from "../components/Leftbar";
import { universityProfile } from '../templates/universityDetail';
import { FaStar } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa";
import { FaWallet } from "react-icons/fa";
import { GiUpgrade } from "react-icons/gi";
import { CgWebsite } from "react-icons/cg";
import { FaLocationDot } from "react-icons/fa6";

enum UniversityDetailMenu {
    OVERVIEW = "overview",
    MAJORS = "majors",
    REVIEWS = "reviews"
}

const UniversityDetail: React.FC = () => {

    const [universityDetail, setUniversityDetail] = useState<UniversityData>();
    const [selectedMenu, setSelectedMenu] = useState<UniversityDetailMenu>(UniversityDetailMenu.OVERVIEW);

    useEffect(() => {
        const fetchData = async () => {
          try {
            setUniversityDetail(universityProfile);
          } catch(err) {
          }
        } 
        fetchData();
      });

    return (
        <>
            <Navbar />
            <div className="flex">
                <Leftbar />
                <div className="p-10 w-[70%]">
                    <div className="flex flex-col gap-5">
                        <div className="flex justify-between items-center p-3 rounded-md">
                            <div className="flex gap-4 items-center">
                                <img src={"assets/UnairLogo.png"} alt="" className="w-24 h-24"/>
                                <div className="flex flex-col gap-2">
                                    <div className="text-4xl font-bold">{universityDetail?.Name}</div>
                                    <div className="flex gap-2">
                                        <p className="text-red-800 bg-red-300 rounded-lg px-2 py-1 font-bold">{universityDetail?.Type}</p>
                                        <p className="text-blue-800 bg-blue-300 rounded-lg px-2 py-1 font-bold">{universityDetail?.Accreditation}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-2 text-4xl">
                                <FaStar className="text-gold"/>
                                <FaStar className="text-gold"/>
                                <FaStar className="text-gold"/>
                                <FaStar className="text-gold"/>
                                <FaStar className="text-gold"/>
                            </div>
                        </div>
                        <div className="flex p-3 gap-8 items-center">
                            <button className={selectedMenu === UniversityDetailMenu.OVERVIEW ? "text-lg font-semibold text-brow-800 bg-yellow p-2 rounded-t-lg": "text-lg font-semibold hover:bg-yellow-200 rounded-t-lg"}>Ringkasan</button>
                            <button className={selectedMenu === UniversityDetailMenu.MAJORS ? "text-lg font-semibold text-brow-800 bg-yellow p-2 rounded-t-lg": "text-lg font-semibold hover:bg-yellow-200 rounded-t-lg"}>Program Studi</button>
                            <button className={selectedMenu === UniversityDetailMenu.REVIEWS ? "text-lg font-semibold text-brow-800 bg-yellow p-2 rounded-t-lg": "text-lg font-semibold hover:bg-yellow-200 rounded-t-lg"}>Ulasan</button>
                        </div>
                        <div className="px-4 w-[80%]">
                            {selectedMenu === UniversityDetailMenu.OVERVIEW ? 
                                <div className="flex flex-col gap-10">
                                    <div className="flex items-center gap-5">
                                        <FaBookOpen className="w-12 h-12 w-[10%] text-darkcyan"/>
                                        <p className="font-semibold text-lg w-[90%]">{universityDetail?.Summary}</p>
                                    </div>
                                    <div className="flex items-center gap-5">
                                        <FaLocationDot className="w-12 h-12 w-[10%] text-darkcyan"/>
                                        <p className="font-semibold text-xl w-[90%] ">{universityDetail?.Location}</p>
                                    </div>     
                                    <div className="flex items-center gap-5">
                                        <FaWallet className="w-12 h-12 w-[10%] text-darkcyan"/>
                                        <p className="font-semibold text-2xl w-[90%]">Rp. {universityDetail?.Tuition.Min} - Rp. {universityDetail?.Tuition.Max}</p>
                                    </div>
                                    <div className="flex items-center gap-5">
                                        <GiUpgrade className="w-12 h-12 w-[10%] text-darkcyan"/>
                                        <p className="font-semibold text-3xl w-[90%]">{universityDetail?.AcceptanceRate} %</p>
                                    </div>                          
                                    <div className="flex items-center gap-5">
                                        <CgWebsite className="w-12 h-12 w-[10%] text-darkcyan"/>
                                        <p className="font-semibold text-2xl w-[90%] underline text-cyan cursor-pointer">{universityDetail?.Website}</p>
                                    </div>                                               
                                </div> : selectedMenu === UniversityDetailMenu.MAJORS ? 
                                <div>

                                </div> : selectedMenu === UniversityDetailMenu.REVIEWS
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UniversityDetail;