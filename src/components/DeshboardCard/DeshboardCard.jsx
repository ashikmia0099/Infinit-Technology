import React from 'react';
import { BsSortNumericUp } from "react-icons/bs";
import cardimage from '../../assets/banner.jpg'
import { IoCloseCircleOutline } from "react-icons/io5";

const DeshboardCard = () => {
    return (
        <div className='py-10 px-[7%] bg-[#F7F7F7]'>
            <div className='flex justify-between'>
                <div>
                    <h1 className='text-2xl font-bold'>Cart</h1>
                </div>
                <div className='flex items-center gap-8'>
                    <h1 className='text-2xl font-bold'>Total cost: 999.99 </h1>
                    <button class="btn btn-outline text-lg font-semibold px-12 rounded-full">Sort by Price <span className='text-2xl font-bold'><BsSortNumericUp /></span></button>
                    <button class="btn btn-outline  text-lg font-semibold px-12 rounded-full">Purches</button>
                </div>
            </div>

            <div className=' bg-white mt-5 py-6 px-10 rounded-2xl'>
                <div className='flex gap-10'>
                    <div>
                        <img src={cardimage} alt="" className='h-32 w-52 rounded-2xl' />
                    </div>
                    <div className='text-left'>
                        <h1 className='text-2xl font-semibold pt-1'>Samsung Galaxy S23 Ultra</h1>
                        <p className=' text-[#09080F99] font-medium pt-2'>Ultra-slim, high-performance laptop with 13.4-inch Infinity Edge display.Ultra-slim, high-performance laptop with 13.4-inch Infinity Edge display.</p>
                        <h5 className='text-xl font-bold pt-3'>Price: $ 999.99</h5>
                    </div>
                    <div>
                    <a href=""><IoCloseCircleOutline className='text-3xl text-red-800' /></a>
                    </div>
                </div>
            </div>
            <div className=' bg-white mt-5 py-6 px-10 rounded-2xl'>
                <div className='flex gap-10'>
                    <div>
                        <img src={cardimage} alt="" className='h-32 w-52 rounded-2xl' />
                    </div>
                    <div className='text-left'>
                        <h1 className='text-2xl font-semibold pt-1'>Samsung Galaxy S23 Ultra</h1>
                        <p className=' text-[#09080F99] font-medium pt-2'>Ultra-slim, high-performance laptop with 13.4-inch Infinity Edge display.Ultra-slim, high-performance laptop with 13.4-inch Infinity Edge display.</p>
                        <h5 className='text-xl font-bold pt-3'>Price: $ 999.99</h5>
                    </div>
                    <div>
                    <a href=""><IoCloseCircleOutline className='text-3xl text-red-800' /></a>
                    </div>
                </div>
            </div>
            <div className=' bg-white mt-5 py-6 px-10 rounded-2xl'>
                <div className='flex gap-10'>
                    <div>
                        <img src={cardimage} alt="" className='h-32 w-52 rounded-2xl' />
                    </div>
                    <div className='text-left'>
                        <h1 className='text-2xl font-semibold pt-1'>Samsung Galaxy S23 Ultra</h1>
                        <p className=' text-[#09080F99] font-medium pt-2'>Ultra-slim, high-performance laptop with 13.4-inch Infinity Edge display.Ultra-slim, high-performance laptop with 13.4-inch Infinity Edge display.</p>
                        <h5 className='text-xl font-bold pt-3'>Price: $ 999.99</h5>
                    </div>
                    <div>
                    <a href=""><IoCloseCircleOutline className='text-3xl text-red-800' /></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeshboardCard;