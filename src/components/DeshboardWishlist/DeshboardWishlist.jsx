import React, { useContext } from 'react';
import { BsSortNumericUp } from "react-icons/bs";
import cardimage from '../../assets/banner.jpg'
import { IoCloseCircleOutline } from "react-icons/io5";
import { dataContext } from '../Provider/DataProvider';

const DeshboardWishlist = () => {


    const {wishList} = useContext(dataContext);

    console.log(wishList.length)


    return (
        <div className='py-10 px-[7%] bg-[#F7F7F7]'>
            <div className='flex justify-start'>
                <h1 className='text-2xl font-bold'>WishList</h1>
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

export default DeshboardWishlist;