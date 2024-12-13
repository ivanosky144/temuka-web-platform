import { FaLocationDot } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { UniversityData } from "../types";
import { useNavigate } from "react-router";

const UniversityCard: React.FC<UniversityData> = ({ID, Name, Slug, Summary, Website, Logo, TotalReviews, TotalMajors, Address, Stars, Type, Accreditation}) => {
    
    const navigate = useNavigate();

    return (
        <div className="p-4 flex flex-col gap-2 w-[90%]" onClick={() => navigate(`/university/${Slug}`)}>
            <div className="flex flex-col gap-4 rounded-md shadow-lg p-5 hover:shadow-xl cursor-pointer" key={ID}>
                <div className="flex justify-between items-center">
                    <div className="flex gap-3 items-center">
                        <img src={Logo} alt="" className="w-16 h-16"/>
                        <div className="flex flex-col gap-1">
                            <h2 className="text-2xl font-bold">{Name}</h2>
                            <div className="flex gap-1 items-center font-semibold text-gold">
                                {Stars}
                                <FaStar />
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <p className="text-red-800 bg-red-300 rounded-lg px-2 py-1 font-bold">{Type}</p>
                        <p className="text-blue-800 bg-blue-300 rounded-lg px-2 py-1 font-bold">{Accreditation}</p>
                    </div>
                </div>
                <div className="flex justify-between">
                    <div className="flex gap-2 items-center">
                        <FaLocationDot className="text-darkcyan"/>
                        <p className="font-semibold">{Address}</p>
                    </div>
                </div>
                <div className="flex gap-4">
                    <div className="flex flex-col gap-1">
                        <p className="font-bold text-2xl">{TotalReviews || 0}</p>
                        <p className=" text-lg">Reviews</p>
                    </div>
                    <div className="flex flex-col gap-1">
                        <p className="font-bold text-2xl">{TotalMajors || 0}</p>
                        <p className="text-lg">Program Studi</p>
                    </div>
                </div>
                <div>{Summary}</div>
            </div>
        </div>
    )
}

export default UniversityCard;

