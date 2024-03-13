import React,{useState} from 'react';
import { MdKeyboardArrowDown } from "react-icons/md";
import { RiCloseFill } from "react-icons/ri";
import { IoCloudUploadOutline } from "react-icons/io5";
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import Timeline from '../Timeline/Timeline';
import Modal2 from '../Modal2/Modal2';


const Modal = ({ showModal, setShowModal }) => {
    
const [showModal2, setShowModal2]=useState(false)
const handleModal2 = () => {
    setShowModal2(true); // Show modal when "New Project" button is clicked
    // setShowModal(false)
};

    return (
        <>
            {showModal ? (
                <>
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 ">
                        <div className="  items-start justify-between w-[1200px] h-[600px] rounded-xl bg-white border-solid">
                            <div className='header border-b-2 p-2 flex items-center justify-between'>
                                <h1 className='font-bold pl-5 text-gray-600'>Add new project</h1>
                                <div>
                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        <RiCloseFill size={25} className='text-[#939495]' />
                                    </button>
                                </div>
                            </div>

                            <div className="grid grid-cols-5 grid-rows-1 gap-4 pl-2 items-center justify-center">
                                <div className="col-span-2 pl-10  sm:hidden md:block ">
                                    <Timeline/>
                                </div>
                                <div className="col-span-3 col-start-3">
                                    <div className='form w-full p-2 space-y-3'>
                                        <div className='pb-5 flex items-center justify-between'>
                                            <div>
                                                <label className=' text-[#6c6e70]' htmlFor='project'>Project Description</label><br />
                                                <input type='text' className='  bg-[#edeaef] pl-2 rounded-lg h-9 w-[250px]' />
                                            </div>

                                            <div className='button flex pr-40 gap-2 text-[#939495]  '>
                                                <div className='relative h-8 w-16 bg-indigo-600 rounded-full'>
                                                    <div className='bg-white h-8 w-8 rounded-full'></div>
                                                </div>
                                                Internal project
                                            </div>
                                        </div>

                                        <div className='flex space-x-10'>
                                            <div className='pb-5'>
                                                <label className=' text-[#6c6e70]' htmlFor='project'>Project Budget Type</label><br />
                                                <button className='text-[#939495] w-[250px] h-9   bg-[#edeaef] rounded-lg text-left pl-2 flex justify-between items-center'>Select an option <span><MdKeyboardArrowDown size={25} /></span></button>
                                            </div>
                                            <div className='pb-5'>
                                                <label className=' text-[#6c6e70]' htmlFor='project'>Managed By</label><br />
                                                <button className='text-[#939495] w-[250px] h-9   bg-[#edeaef] rounded-lg text-left pl-2 flex justify-between items-center'>Select an option <span><MdKeyboardArrowDown size={25} /></span></button>
                                            </div>
                                        </div>

                                        <div className='flex space-x-10'>
                                            <div className='pb-'>
                                                <label className=' text-[#6c6e70]' htmlFor='project'>Project Contract Type</label><br />
                                                <button className='text-[#939495] w-[250px] h-9   bg-[#edeaef] rounded-lg text-left pl-2 flex justify-between items-center'>Select an option <span><MdKeyboardArrowDown size={25} /></span></button>
                                            </div>
                                            <div className='pb-5'>
                                                <label className=' text-[#6c6e70]' htmlFor='project'>Project Mangager</label><br />
                                                <button className='text-[#939495] w-[250px] h-9   bg-[#edeaef] rounded-lg text-left pl-2 flex justify-between items-center'>Select an option <span><MdKeyboardArrowDown size={25} /></span></button>
                                            </div>
                                        </div>

                                        <div>
                                            <label className=' text-[#6c6e70]' htmlFor='project'>Attach Approval Email</label><br />
                                            <div className='w-[550px] h-[60px]  bg-[#edeaef] items-center flex justify-center rounded-lg'>
                                                <h4 className=' flex text-gray-600'><span><IoCloudUploadOutline size={30} className=' text-gray-600 font-bold pr-2' /></span>Drag and drop  approval email of the project <span className='pl-2 pr-2 text-gray-600 font-semibold'>OR</span></h4>
                                                <button className=' border h-[30px]  w-[100px] text-[#6c6e70] rounded-md bg-indigo-100 '
                                                >Choose</button>
                                            </div>
                                        </div>

                                        <div className='flex justify-between  pt-10'>
                                            <div>
                                                <button className='w-20 h-8  p-5 bg-[#edeaef] flex items-center  justify-center rounded-md text-gray-600'><MdArrowBackIos className=' text-gray-600' onClick={() => setShowModal2(false)}/>Back</button>
                                            </div>
                                            <div className='pr-8'>
                                                <button onClick={()=>handleModal2()} className=' w-auto p-5 h-8 bg-indigo-700 flex items-center  p-3 justify-center rounded-md text-white'>Save & continue <MdArrowForwardIos className=' text-white' /></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                    {showModal2 && <Modal2 showModal2={showModal2} setShowModal2={setShowModal2} /> } {/* Render Modal component only when showModal is true */}

                </>
            ) : null}
        </>
    );
}

export default Modal;


// <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
// <button
//     className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
//     type="button"
//     onClick={() => setShowModal(false)}
// >
//     Close
// </button>
// <button
//     className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
//     type="button"
//     onClick={() => setShowModal(false)}
// >
//     Save Changes
// </button>