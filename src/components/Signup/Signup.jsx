import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import bg from '../../assets/5235.jpg';

const Signup = () => {
    return (
        <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-2/5">
                <div className="flex flex-col justify-center items-center min-h-screen py-12 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-md w-full space-y-8">
                        <div>
                            <h2 className="font-poppins text-3xl font-extrabold">
                                <span className='text-[#6366f1]'>Project</span>
                                <span className='text-[#1e293b]'>Sync</span>
                                <span className='text-[#22d3ee]'>.</span>
                            </h2>
                        </div>
                        <div>
                            <h2 className="mt-8 text-2xl font-extrabold text-[#475569]">Sign in to your Account</h2>
                            <h5 className='font-bold text-gray-600 font-poppins'>New here ? <span className='text-[#22d3ee] font-poppins'>Create an Account</span></h5>
                        </div>
                        <form className="mt-8 space-y-6">
                            <div>
                                <label htmlFor="username" className="block text-sm font-medium text-gray-500">Username</label>
                                <input id="username" name="username" type="text" required className="appearance-none rounded-xl bg-gray-100 relative block w-full md:w-[300px] px-3 py-3 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Enter Username" />
                            </div>
                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-500">
                                    Password <span className="ml-12 md:ml-28 text-[#6366f1]">Forgot password ?</span>
                                </label>
                                <input id="password" name="password" type="password" required className="appearance-none rounded-xl bg-gray-100 relative block w-full md:w-[300px] px-3 py-3 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mt-3" placeholder="Password" />
                            </div>
                            <div className="flex items-center">
                                <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                    Remember me
                                </label>
                            </div>
                            <div>
                                <button type="submit" className="group relative flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-6">
                                    Sign in <IoIosArrowForward className="ml-2" size={20} />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="hidden md:block md:w-3/5 relative ">
                <div className='h-full' style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <div className='absolute inset-0 flex flex-col  pt-32 items-center'>
                        <div className=' '>
                            <h3 className="text-blck text-2xl font-bold text-[#6366f1] ">Seamless Collaboration</h3><br/>
                            <h1 className="text-blck text-3xl font-bold text-[#475569]">Where efficiency meets innovation in the <br/> realm of project coordination and<br/> collaboration</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
