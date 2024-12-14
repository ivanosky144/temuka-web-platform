import React, { useEffect, useState } from 'react';
import Leftbar from '../components/Leftbar';
import Navbar from '../components/Navbar';
import UniversityCard from '../components/UniversityCard';
import { UniversityData } from "../types";
import { getUniversities } from '../services/universityService';

const Universities: React.FC = () => {

  const [universities, setUniversities] = useState<UniversityData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await getUniversities();
        setUniversities(data);
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
            <div className="flex flex-col w-[100%] mx-[20%]">
              {universities?.map((u) => (
                <UniversityCard 
                  ID={u.ID}
                  Name={u.Name}
                  Slug={u.Slug}
                  Summary={u.Summary}
                  Website={u.Website}
                  Logo={u.Logo}
                  TotalReviews={u.TotalReviews}
                  TotalMajors={u.TotalMajors}
                  Address={u.Address}
                  Stars={u.Stars}
                  Type={u.Type}
                  Accreditation={u.Accreditation}
                  Tuition={u.Tuition}
                  AcceptanceRate={u.AcceptanceRate}
                />
              ))}
            </div>
        </div>
    </>
  );
}

export default Universities;
