import React, { useState } from 'react';
import SideNav from '../../SideNavbar/SideNav';
import { IoIosArrowForward } from 'react-icons/io';
import { FiPlus } from "react-icons/fi";
import { FaAngleDown } from "react-icons/fa";
import { CiViewList } from "react-icons/ci";
import { CgMenuGridO } from "react-icons/cg";
import Cards from '../../Cards/Cards';
import Modal from '../../Modal/Modal';
import Navbar from '../../Navbar/Navbar';

const Project = () => {
    const [showModal, setShowModal] = useState(false); // State to control modal visibility

    const handleNewProjectClick = () => {
        setShowModal(true); // Show modal when "New Project" button is clicked
    };

    return (
        <>
            <div className='  sticky top-0 z-50 bg-white'>
                <Navbar />
            </div>
            <div id='' className='flex flex-col md:flex-row w-full'>
                <div className='md:w-64'><SideNav /></div>
                <div className='body w-au'>
                    <div className='head pl-3 pb-3 pt-5 text-[#475569] font-semibold flex flex-col md:flex-row items-center justify-between'>
                        <div>
                            <h2 className='text-xl'>Projects</h2>
                            <h6 className='text-[#94a3b8] text-sm flex items-center'>
                                Project Management
                                <span className="ml-2"><IoIosArrowForward /></span>
                                <span className='ml-2 text-[#475569] font-semibold'>Projects</span>
                            </h6>
                        </div>
                        <div className='flex gap-3 mt-4 md:mt-0'>
                            <button type="button" onClick={handleNewProjectClick} className="group relative flex justify-center items-center p-3 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                <FiPlus className="mr-2" size={20} /><span className="hidden md:inline-block">New Project</span>
                            </button>
                            <button type="submit" className="group relative flex justify-center items-center p-3 border border-transparent text-sm font-medium rounded-md text-black bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                <span>Sort by</span> <FaAngleDown className="ml-2" size={20} />
                            </button>
                            <button type="submit" className="group relative flex justify-center items-center p-3 border border-transparent text-sm font-medium rounded-md text-black bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                <span>My Projects</span> <FaAngleDown className="ml-2" size={20} />
                            </button>
                            <div className='flex pr-3 '>
                                <button type="submit" className="group relative flex justify-center items-center p-3 border border-transparent text-sm font-medium rounded-md text-black bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                    <CiViewList className="inline-block align-middle" size={20} />
                                </button>
                                <button type="submit" className="group relative flex justify-center items-center p-3 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                    <CgMenuGridO className="inline-block align-middle mr-2" size={20} />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='card-place bg-[#e0e7ff] h-auto md:h-auto w-full md:w-[100%] p-5 rounded-md flex justify-center md:justify-start'>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-[90vw]">
                            <div className="w-full md:w-auto"><Cards /></div>
                            <div className="w-full md:w-auto"><Cards /></div>
                            <div className="w-full md:w-auto"><Cards /></div>
                            <div className="w-full md:w-auto"><Cards /></div>
                            <div className="w-full md:w-auto"><Cards /></div>
                            <div className="w-full md:w-auto"><Cards /></div>
                        </div>

                    </div>
                </div>
            </div>
            {showModal && <Modal showModal={showModal} setShowModal={setShowModal} />} {/* Render Modal component only when showModal is true */}
        </>
    );
}

export default Project;
