import React, { useState } from 'react';
import { MdDashboard } from 'react-icons/md';
import { FaFolderOpen } from 'react-icons/fa';
import { IoBarChartOutline } from 'react-icons/io5';
import { IoMdPeople } from 'react-icons/io';
import { FiSettings } from 'react-icons/fi';
import { FiSliders } from 'react-icons/fi';
import { RiMenu2Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";

const SideNav = () => {
  const [showMenu, setShowMenu] = useState(false); // Initially closed

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="w-full md:w-64 md:flex-shrink-0 flex flex-col pl-3 pr-2 pt-3">
      {/* Toggle button visible only on mobile */}
      <button className="md:hidden rounded-lg bg-[#e0e7ff] p-3 " onClick={toggleMenu}>
        {showMenu ? <IoMdClose /> : <RiMenu2Fill />}
      </button>
      {/* Side nav links */}
      <div className={`flex-grow md:flex-grow-0 ${showMenu ? 'block' : 'hidden'} md:block`}>
        <a href='' className='p-4 flex items-center gap-3 hover:bg-gray-200 hover:text-[#6366f1] font-semibold rounded-xl text-[#475569]'>
          <MdDashboard /> Dashboard
        </a>
        <a href='' className='p-4 flex items-center gap-3 hover:bg-gray-200 font-semibold hover:text-[#6366f1] rounded-xl text-[#475569]'>
          <FaFolderOpen /> Project Management
        </a>
        <a href='' className='p-4 flex items-center gap-3 hover:bg-gray-200 font-semibold hover:text-[#6366f1] rounded-xl text-[#475569]'>
          <IoBarChartOutline /> Risk Management
        </a>
        <a href='' className='p-4 flex items-center gap-3 hover:bg-gray-200 font-semibold hover:text-[#6366f1] rounded-xl text-[#475569]'>
          <IoBarChartOutline /> Test Case Management
        </a>
        <a href='' className='p-4 flex items-center gap-3 hover:bg-gray-200 font-semibold hover:text-[#6366f1] rounded-xl text-[#475569]'>
          <IoMdPeople /> Resource Management
        </a>
        <a href='' className='p-4 flex items-center gap-3 hover:bg-gray-200 font-semibold hover:text-[#6366f1] rounded-xl text-[#475569]'>
          <IoBarChartOutline /> Audit Management
        </a>
        <a href='' className='p-4 flex items-center gap-3 hover:bg-gray-200 font-semibold hover:text-[#6366f1] rounded-xl text-[#475569]'>
          <FiSliders /> CAST Management
        </a>
        <a href='' className='p-4 flex items-center gap-3 hover:bg-gray-200 font-semibold hover:text-[#6366f1] rounded-xl text-[#475569]'>
          <IoBarChartOutline /> Report
        </a>
        <a href='' className='p-4 flex items-center gap-3 hover:bg-gray-200 font-semibold hover:text-[#6366f1] rounded-xl text-[#475569]'>
          <FiSettings /> Settings
        </a>
      </div>
    </div>
  );
};

export default SideNav;
