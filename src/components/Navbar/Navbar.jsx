import React from 'react'
import { RiMenuFoldLine } from "react-icons/ri";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import avatart from '../../assets/dp1.jpg'



const Navbar = () => {
    return (
        <div className='w-full border-b-2  flex items-center justify-between'>
            <div>
                <div className='nav-log flex items-center gap-5 '>
                    <h2 className="font-poppins text-2xl p-4 font-extrabold">
                        <span className='text-[#6366f1]'>Project</span>
                        <span className='text-[#1e293b]'>Sync</span>
                        <span className='text-[#22d3ee]'>.</span>
                    </h2>
                    <div className=''>
                        <RiMenuFoldLine className='text-[#475569]' size={25} />
                    </div>
                </div>

            </div>
            <div className=' nav-items flex items-center gap-4 pr-4'>
            <div className=' bg-gray-200 flex items-center rounded-lg pl-2'>
            <CiSearch size={20} className='text-[#475569]'/>
                <input
                    type="text"
                    placeholder="Search..."
                    className="border  h-8 px-5 pr-10 rounded-lg bg-gray-200 text-sm focus:outline-none"
                />
            </div>
            
                <IoMdNotificationsOutline  className='text-[#475569]' size={25}/>
                <IoMdSettings className='text-[#475569]' size={25} />

                <div className='avatar flex pr-3 gap-2'>
                    <div className='w-9 h-9 rounded-full bg-black overflow-hidden'>
                        <img src={avatart} className='w-full h-full object-cover'/>
                    </div>
                    <div className='details hidden md:flex flex-col'>
                            <div className='username font-semibold text-[#172554]  text-[15px]'>
                                John Mathew
                            </div>
                            <div className='email   text-[10px] text-[#475569]'>
                                john@gmail.com
                            </div>
                        </div>
                </div>
            </div>

        </div>
    )
}

export default Navbar