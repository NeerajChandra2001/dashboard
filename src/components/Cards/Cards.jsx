import React from 'react';
import { FaPen } from "react-icons/fa";
import { IoMdMore } from "react-icons/io";
import { GoPlus } from "react-icons/go";
import dp1 from '../../assets/dp1.jpg';
import dp2 from '../../assets/dp2.jpg';

const Cards = () => {
  return (
    <div className='cards w-full md:w-[380px] h-auto md:h-[280px] rounded-xl bg-white'>
      <div className='content p-7'>
        <div className='head flex items-center justify-between text-[#475569]'>
          <h4 className='text-sm md:text-base font-semibold'>Project Title Goes here</h4>
          <div className='flex items-center gap-4'>
            <FaPen />
            <IoMdMore />
          </div>
        </div>
        <div className='text-[#6366f1] font-semibold text-sm md:text-base pt-3'>Active</div>

        <div className='flex flex-col md:flex-row items-center justify-between'>
          <div className='pt-5 md:pt-0 md:pr-5'>
            <h6 className='text-[#475569] text-[12px] md:text-base'>Start Date</h6>
            <h6 className='text-[#575a5e] font-bold'>12 Sep 2021</h6>
          </div>
          <div className='bg-[#e0e7ff] mt-3 md:mt-0 w-full md:w-[120px] flex items-center justify-center rounded-md '>
            <div className='flex'>
              <h3 className='font-semibold text-[#475569]'>14 <br />
                <span className='font-normal text-[#94a3b8]'>Tasks</span>
              </h3>
              <div className='pr-3 pl-3 text-[30px] text-[#575a5e]'>|</div>
              <h3 className='font-semibold text-[#475569]'>4 <br />
                <span className='font-normal text-[#94a3b8]'>Users</span>
              </h3>
            </div>
          </div>
        </div>

        <div className='pt-3'>
          <div className='text-semibold text-[#475569]'>Members</div>
          <div className='flex gap-2 pt-2'>
            <div className='w-9 h-9 rounded-full bg-black overflow-hidden'>
              <img src={dp1} className='w-full h-full object-cover' alt='Avatar' />
            </div>
            <div className='w-9 h-9 rounded-full bg-black overflow-hidden'>
              <img src={dp2} className='w-full h-full object-cover' alt='Avatar' />
            </div>
            <div className='w-9 h-9 rounded-full bg-black overflow-hidden'>
              <img src={dp1} className='w-full h-full object-cover' alt='Avatar' />
            </div>
            <div className='w-9 h-9 flex items-center justify-center border-2 rounded-full '>
              <GoPlus className='text-[#9ea0a1]' size={25} />
            </div>
          </div>
        </div>

        <div>
          <div className='pt-2'>
            <h3 className='text-[#475569] text-sm md:text-base flex justify-between pb-1'>Progress <span className='text-[#475569] text-sm md:text-base'>67%</span></h3>
            <div className="bg-gray-200 h-2 w-full rounded-full overflow-hidden ">
              <div className="bg-indigo-600 h-full w-[67%]" ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
