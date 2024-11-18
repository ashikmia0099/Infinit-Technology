import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Deshboard = () => {
    return (
        <div>
            <div className='bg-[#9538E2] py-7'>
                <div>
                    <h1 className=' text-3xl font-bold text-white'>Dashboard</h1>
                    <p className='mx-[15%] text-lg mt-5 text-white'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                </div>
                <div className='flex gap-5  justify-center mt-6'>
                    <NavLink to={'/dashboard/card'} className={({ isActive }) =>
                    
                    isActive ? 'btn bg-white px-14 text-[#9538E2] rounded-full text-xl font-bold' : 'btn bg-[#9538E2] px-14 rounded-full text-xl text-white font-bold'
                    
                    }>
                        Cart
                    </NavLink>
                    <NavLink to={'/dashboard/wishlist' } className={({isActive}) =>
                    
                    isActive ? 'btn bg-white text-[#9538E2] px-14 rounded-full text-xl font-bold' : 'btn text-white bg-[#9538E2]  px-14 rounded-full text-xl font-bold'

                    }>
                        Wishlist
                    </NavLink>
                </div>
            </div>

            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Deshboard;


// <button class="btn  px-14 rounded-full text-xl font-bold">Cart</button>
{/* <button class="btn btn-outline px-14 rounded-full text-xl font-bold">Wishlist</button> */}