    import { useEffect, useState } from "react";
    import { UniversityData } from "../types";
    import Navbar from "../components/Navbar";
    import Leftbar from "../components/Leftbar";
    import { FaStar } from "react-icons/fa";
    import { FaBookOpen } from "react-icons/fa";
    import { FaWallet } from "react-icons/fa";
    import { GiUpgrade } from "react-icons/gi";
    import { CgWebsite } from "react-icons/cg";
    import { FaLocationDot } from "react-icons/fa6";
    import { FaRegStar } from "react-icons/fa";
    import { useParams } from "react-router";
    import { getUniversityDetail } from "../services/universityService";

    enum UniversityDetailMenu {
        OVERVIEW = "overview",
        MAJORS = "majors",
        REVIEWS = "reviews"
    }

    const StarRating: React.FC<{ stars: number }> = ({ stars }) => {
        const fullStars = Math.floor(stars);
        const partialStar = stars % 1;
        const emptyStars = 5 - fullStars - (partialStar > 0 ? 1 : 0);

        const renderStar = (filledPercentage: number, key: string) => (
            <div className="relative w-8 h-8" key={key}>
                <FaRegStar className="absolute text-gray-200 text-3xl" /> 
                <div className="absolute top-0 left-0 h-full overflow-hidden" style={{ width: `${filledPercentage}%`}}>
                    <FaStar className="text-gold text-3xl"/>
                </div>
            </div>
        );

        return (
            <div className="flex gap-1">
                {[...Array(fullStars)].map((_, index) => renderStar(100, `full-${index}`))}
                {partialStar > 0 && renderStar(partialStar * 100, "partial")}
                {[...Array(emptyStars)].map((_, index) => renderStar(0, `empty-${index}`))}
            </div>
        );
    };

    const UniversityDetail: React.FC = () => {

        const [universityDetail, setUniversityDetail] = useState<UniversityData>();
        const [selectedMenu, setSelectedMenu] = useState<UniversityDetailMenu>(UniversityDetailMenu.OVERVIEW);
        const { slug } = useParams();

        useEffect(() => {
            const fetchData = async () => {
            try {
                const { data } = await getUniversityDetail(String(slug));
                setUniversityDetail(data);
            } catch(err) {
            }
            } 
            fetchData();
        });

        return (
            <>
                <Navbar />
                <div className="flex pt-16">
                    <Leftbar />
                    <div className="p-10 w-[100%] rounded-md border-2 mt-4 mx-[20%]">
                        <div className="flex flex-col gap-5">
                            <div className="flex justify-between items-center p-3 rounded-md">
                                <div className="flex gap-4 items-center">
                                    <img src={universityDetail?.Logo} alt={universityDetail?.Name} className="w-24 h-24"/>
                                    <div className="flex flex-col gap-2">
                                        <div className="text-4xl font-bold">{universityDetail?.Name}</div>
                                        <div className="flex gap-2">
                                            <p className="text-red-800 bg-red-300 rounded-lg px-2 py-1 font-bold">{universityDetail?.Type}</p>
                                            <p className="text-blue-800 bg-blue-300 rounded-lg px-2 py-1 font-bold">{universityDetail?.Accreditation}</p>
                                        </div>
                                    </div>
                                </div>
                                <StarRating stars={Number(universityDetail?.Stars || 0)}/>
                            </div>
                            <div className="flex p-3 gap-8 items-center">
                                <button onClick={() => setSelectedMenu(UniversityDetailMenu.OVERVIEW)} className={selectedMenu === UniversityDetailMenu.OVERVIEW ? "text-lg font-semibold text-brow-800 bg-yellow p-2 rounded-t-lg": "text-lg font-semibold hover:bg-gray-200 p-2 rounded-t-lg"}>Ringkasan</button>
                                <button onClick={() => setSelectedMenu(UniversityDetailMenu.MAJORS)} className={selectedMenu === UniversityDetailMenu.MAJORS ? "text-lg font-semibold text-brow-800 bg-yellow p-2 rounded-t-lg": "text-lg font-semibold hover:bg-gray-200 p-2 rounded-t-lg"}>Program Studi</button>
                                <button onClick={() => setSelectedMenu(UniversityDetailMenu.REVIEWS)} className={selectedMenu === UniversityDetailMenu.REVIEWS ? "text-lg font-semibold text-brow-800 bg-yellow p-2 rounded-t-lg": "text-lg font-semibold hover:bg-gray-200 p-2 rounded-t-lg"}>Ulasan</button>
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
                                            <p className="font-semibold text-xl w-[90%] ">{universityDetail?.Address}</p>
                                        </div>     
                                        <div className="flex items-center gap-5">
                                            <FaWallet className="w-12 h-12 w-[10%] text-darkcyan"/>
                                            <p className="font-semibold text-2xl w-[90%]">Rp. {universityDetail?.MinTuition} - Rp. {universityDetail?.MaxTuition}</p>
                                        </div>
                                        <div className="flex items-center gap-5">
                                            <GiUpgrade className="w-12 h-12 w-[10%] text-darkcyan"/>
                                            <p className="font-semibold text-3xl w-[90%]">{universityDetail?.AcceptanceRate} %</p>
                                        </div>                          
                                        <div className="flex items-center gap-5">
                                            <CgWebsite className="w-12 h-12 w-[10%] text-darkcyan"/>
                                            <a href={universityDetail?.Website} className="font-semibold text-2xl w-[90%] underline text-cyan cursor-pointer" rel="noopener noreferrer" target="_blank">
                                                {universityDetail?.Website}
                                            </a>
                                        </div>                                               
                                    </div> : selectedMenu === UniversityDetailMenu.MAJORS ? 
                                    <div>

                                    </div> : selectedMenu === UniversityDetailMenu.REVIEWS ?
                                    <div>

                                    </div> : 
                                    <div></div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    export default UniversityDetail;