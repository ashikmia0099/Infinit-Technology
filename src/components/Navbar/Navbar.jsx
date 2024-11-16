import React from 'react';
import { NavLink } from 'react-router-dom';
import Banner from '../Banner/Banner';
import { CiHeart } from "react-icons/ci";
import { IoCartSharp } from "react-icons/io5";

const Navbar = () => {


    // const links = (
    //     <>

    //         <li><NavLink to="/" className='text-white text-lg font-semibold'>Home</NavLink></li>
    //         <li><NavLink to="/statistics" className='text-white text-lg font-semibold'>Statistics</NavLink></li>
    //         <li><NavLink to="/dashboard" className='text-white text-lg font-semibold'>Dashboard</NavLink></li>

    //     </>
    // );

    const links = (
        <>

        <li>
            <NavLink to='/' className={({isActive}) =>
            isActive ? 'text-white text-lg font-semibold border-b-4 border-indigo-500' : 'text-black text-lg font-semibold'
            
            }>Home</NavLink>
        </li>
        <li>
            <NavLink to="/statistics" className={({isActive}) =>
            isActive ? 'text-white text-lg font-semibold border-b-4 border-indigo-500' : 'text-black text-lg font-semibold'
            
            }>Statistics</NavLink>
        </li>
        <li>
            <NavLink to="/dashboard" className={({isActive}) =>
            isActive ? 'text-white text-lg font-semibold border-b-4 border-indigo-500' : 'text-black text-lg font-semibold'
            
            }>Dashboard</NavLink>
        </li>
        
        
        
        </>
    )



    return (
        
            <div className="navbar sticky top-0 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-2xl font-semibold text-white" >InFinity </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}

                    </ul>
                </div>
                <div className="navbar-end gap-9 px-5">
                   <p className='text-xl p-1 bg-white text-black rounded-full'><CiHeart /></p>
                   <p className='text-xl p-1 bg-white text-black rounded-full'><IoCartSharp /></p>
                    
                </div>
            </div>
            
        

    );
};

export default Navbar;