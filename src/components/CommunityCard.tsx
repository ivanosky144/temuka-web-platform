import { useNavigate } from "react-router";
import { CommunityCardData, CommunityData } from "../types";
import { FaUserGroup } from "react-icons/fa6";

const CommunityCard: React.FC<CommunityCardData> = ({ ID, Name, Slug, Description, MembersCount, LogoPicture, CoverPicture }) => {

    const navigate = useNavigate();

    const truncateText = (text: string): string => {
        return text.substring(0, 100) + "...";
      };

    return (
        <div className="rounded-md border-2 border-gray-100 flex flex-col relative bg-red cursor-pointer hover:bg-gray-50" key={ID} onClick={() => navigate(`/community/${Slug}`)}>
            <img 
                src={CoverPicture}
                alt=""
                className="h-[150px] rounded-lg"
            />
            <img
                className="h-20 w-20 object-cover rounded-3xl mr-2 absolute p-2 bg-white top-[120px] left-[50px]"
                src={LogoPicture}
                alt="user photo profile"
            />
            <div className="flex justify-between ml-[130px] mt-2 relative">
                <h1 className="font-bold text-2xl">{Name}</h1>
            </div>
            <div className="flex flex-col gap-1 mt-1 py-2 px-4">
                <p className="text-sm text-justify">{truncateText(Description)}</p>
                <div className="flex justify-between items-center">
                    <div className="flex gap-2 items-center">
                        <FaUserGroup className="text-cyan text-sm font-semibold" />
                        <p className="text-cyan text-sm">{MembersCount} anggota</p>
                    </div>
                    <button className="bg-darkcyan rounded-xl text-md py-1 mt-3 px-2 w-[100px] font-bold text-white shadow-md hover:opacity-80">
                        Gabung
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CommunityCard;