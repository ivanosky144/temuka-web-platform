import React, { useState } from 'react'
import { FaChevronDown } from 'react-icons/fa';

const PostCustomDropdown: React.FC = () => {
  
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState("Pilih komunitas");

    const options = [
        {
            value: "fisika",
            label: "Fisika",
            img: "https://i.etsystatic.com/23207112/r/il/1d2d41/4925479274/il_fullxfull.4925479274_97lr.jpg",
            },
            {
            value: "ilmu-komputer",
            label: "Ilmu Komputer",
            img: "https://i.etsystatic.com/23207112/r/il/1d2d41/4925479274/il_fullxfull.4925479274_97lr.jpg",
            },
            {
            value: "pejuang-utbk",
            label: "Pejuang UTBK",
            img: "https://i.etsystatic.com/23207112/r/il/1d2d41/4925479274/il_fullxfull.4925479274_97lr.jpg",
            },
    ]

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
            {options.map((option) => (
                <div
                key={option.value}
                onClick={() => handleSelect(option)}
                className="flex items-center p-2 cursor-pointer hover:bg-gray-100"
                >
                <img
                    src={option.img}
                    alt={option.label}
                    className="h-[20px] w-[20px] rounded-lg mr-2"
                />
                <h1 className="font-semibold">{option.label}</h1>
                </div>
            ))}
            </div>
        )}
    </div>
    );
}

export default PostCustomDropdown;