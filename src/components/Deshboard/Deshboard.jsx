import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Deshboard = () => {
    return (
        <div>
            <div className='bg-[#9538E2] py-7'>
                <div>
                    <h1 className=' text-3xl font-bold text-white'>Dashboard</h1>
                    <p className='mx-[15%] text-lg mt-5 text-white'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                </div>
                <div className='flex gap-5  justify-center mt-6'>
                    <Link to={'/dashboard/card'}>
                        <button class="btn  px-14 rounded-full">Cart</button>
                    </Link>
                    <Link to={'/dashboard/wishlist'}>
                        <button class="btn btn-outline px-14 rounded-full">Wishlist</button>
                    </Link>
                </div>
            </div>

            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Deshboard;