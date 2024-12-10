import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar';
import Leftbar from '../components/Leftbar';
import { CommunityCardData, CommunityData } from '../types';
import CommunityCard from '../components/CommunityCard';
import { getCommunities } from '../services/communityService';

const Communities: React.FC = () => {

    const [communities, setCommunities] = useState<CommunityCardData[]>([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
            const { data } = await getCommunities();
            setCommunities(data);
        } catch(err) {
  
        }
      } 
      fetchData();
    })
    return (
        <>
            <Navbar />
            <div className="flex pt-16">
                <Leftbar />
                <div className="grid grid-cols-3 gap-2 w-[100%] ml-[20%] mr-[5%] py-5">
                    {communities?.map((u) => (
                        <CommunityCard 
                            ID={u.ID}
                            Name={u.Name}
                            Description={u.Description}
                            LogoPicture={u.LogoPicture}
                            MembersCount={u.MembersCount}
                            CoverPicture={u.CoverPicture}
                        />
                    ))}
                </div>
            </div>
        </>  
    );
}

export default Communities;