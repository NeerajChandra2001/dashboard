import React from 'react';
import { MdKeyboardArrowDown } from "react-icons/md";
import { RiCloseFill } from "react-icons/ri";
import { IoCloudUploadOutline } from "react-icons/io5";
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import Timeline from '../Timeline/Timeline';
import { MdOutlineCalendarMonth } from "react-icons/md";


const Modal2 = ({ showModal2, setShowModal2 }) => {
    return (
        <>
            {/* <button
                className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowModal(true)}
            >
                Open regular modal
            </button> */}
            {showModal2 ? (
                <>
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 ">
                        <div className="  items-start justify-between w-[1200px] h-[600px] rounded-xl bg-white border-solid">
                            <div className='header border-b-2 p-2 flex items-center justify-between'>
                                <h1 className='font-bold pl-5 text-gray-600'>Add new project</h1>
                                <div>
                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal2(false)}
                                    >
                                        <RiCloseFill size={25} className='text-[#939495]' />
                                    </button>
                                </div>
                            </div>

                            <div className="grid grid-cols-5 grid-rows-1 gap-4 pl-2 items-center justify-center">
                                <div className="col-span-2 pl-10">
                                    <Timeline />
                                </div>
                                <div className="col-span-3 col-start-3">
                                    <div className='form w-full p-2 space-y-3'>
                                        <div className='pb-5 flex items-center justify-between'>
                                            <div>
                                                <label className=' text-[#6c6e70]' htmlFor='project'>Work Order Number </label><br />
                                                <input type='text' value='546434' className=' text-[#6c6e70] bg-[#edeaef] pl-2 rounded-lg h-9 w-[250px]' />
                                            </div>

                                           
                                        </div>

                                        <div className='flex space-x-10'>
                                            <div className='pb-5'>
                                                <label className=' text-[#6c6e70]' htmlFor='project'>From Date</label><br />
                                                <button className='text-[#939495] w-[250px] h-9   bg-[#edeaef] rounded-lg text-left pl-2 flex justify-between items-center'>Select an option <span><MdOutlineCalendarMonth size={25} /></span></button>
                                            </div>
                                            <div className='pb-5'>
                                                <label className=' text-[#6c6e70]' htmlFor='project'>TO Date</label><br />
                                                <button className='text-[#939495] w-[250px] h-9   bg-[#edeaef] rounded-lg text-left pl-2 flex justify-between items-center'>Select an option <span><MdOutlineCalendarMonth size={25} /></span></button>
                                            </div>
                                        </div>

                                        <div className='flex space-x-10'>
                                            <div className='pb-'>
                                                <label className=' text-[#6c6e70]' htmlFor='project'>Client Name</label><br />
                                                <button className='text-[#939495] w-[250px] h-9   bg-[#edeaef] rounded-lg text-left pl-2 flex justify-between items-center'>Select an option <span><MdKeyboardArrowDown size={25} /></span></button>
                                            </div>
                                            <div className='pb-5'>
                                                <label className=' text-[#6c6e70]' htmlFor='project'>Client Email</label><br />
                                                <button className='text-[#939495] w-[250px] h-9   bg-[#edeaef] rounded-lg text-left pl-2 flex justify-between items-center'>Select an option <span><MdKeyboardArrowDown size={25} /></span></button>
                                            </div>
                                        </div>

                                        <div className='flex space-x-10 space-y'>
                                            <div className='pb-5'>
                                                <label className=' text-[#6c6e70]' htmlFor='project'>Client Location</label><br />
                                                <button className='text-[#939495] w-[250px] h-9   bg-[#edeaef] rounded-lg text-left pl-2 flex justify-between items-center'>Select an option <span><MdKeyboardArrowDown size={25} /></span></button>
                                            </div>
                                            <div className='pb-5'>
                                                <label className=' text-[#6c6e70]' htmlFor='project'>Funded By</label><br />
                                                <button className='text-[#939495] w-[250px] h-9   bg-[#edeaef] rounded-lg text-left pl-2 flex justify-between items-center'>Select an option <span><MdKeyboardArrowDown size={25} /></span></button>
                                            </div>
                                        </div>

                                       

                                        <div className='flex justify-between pt-10'>
                                            <div>
                                                <button className='w-20 p-5 h-8 bg-[#edeaef] flex items-center  justify-center rounded-md text-gray-600'><MdArrowBackIos className=' text-gray-600' onClick={() => setShowModal2(false)} />Back</button>
                                            </div>
                                            <div className='pr-8 flex gap-5'>
                                                <button className=' w-auto h-8 border p-5 bg-indigo-100  border-indigo-600 flex items-center  p-3 justify-center rounded-md text-indigo-600'>Skip <MdArrowForwardIos className=' text-indigo-600' />
                                                </button>
                                                <button className=' p-5 w-auto h-8 bg-indigo-700 flex items-center  p-3 justify-center rounded-md text-white'>Save & continue <MdArrowForwardIos className=' text-white' /></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    );
}

export default Modal2;
