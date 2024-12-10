import React, { useEffect, useState } from 'react'
import { FaChevronDown } from 'react-icons/fa';
import { getJoinedCommunities } from '../services/communityService';
import useAuthStore from '../store/authStore';
import { CommunityData } from '../types';

const PostCustomDropdown: React.FC = () => {
  
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState("Pilih komunitas");
    const [joinedCommunities, setJoinedCommunities] = useState<CommunityData[]>([]);
    const user = useAuthStore((state) => state.user);

    useEffect(() => {
        const fetchData = async () => {
            const payload = {
                user_id: user?.id
            };
            const { data } = await getJoinedCommunities(payload);
            setJoinedCommunities(data);
        };
        fetchData();
    }, []);

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleSelect = (option: any) => {
        setSelectedOption(option.label);
        setIsOpen(false);
    };
  
    return (
    <div className="relative inline-block w-[40%]">
        <div
            onClick={toggleDropdown}
            className="bg-gray-100 p-2 rounded-md cursor-pointer flex justify-between items-center hover:bg-gray-200"
        >
            <div className="flex items-center gap-2">
            <h1 className="font-semibold">{selectedOption}</h1>
            </div>
            <FaChevronDown />
        </div>
        {isOpen && (
            <div className="absolute mt-2 bg-white shadow-lg rounded-md w-full z-10">
            {joinedCommunities?.map((option, idx) => (
                <div
                    key={idx}
                    onClick={() => handleSelect(option)}
                    className="flex items-center p-2 cursor-pointer hover:bg-gray-100"
                >
                    <img
                        src={option.LogoPicture}
                        alt={option.Name}
                        className="h-[20px] w-[20px] rounded-lg mr-2"
                    />
                    <h1 className="font-semibold">{option.Name}</h1>
                </div>
            ))}
            </div>
        )}
    </div>
    );
}

export default PostCustomDropdown;