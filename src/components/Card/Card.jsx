import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({card}) => {

   

    const { id, title, price, image } = card;

    return (
        <Link to={`products/${id}`}>
        <div className='mt-10 mb-10'>
            <div className="card bg-base-100  shadow-xl mt-2 text-start">
                <figure>
                    <img
                        src={image}
                        alt={title} className=' rounded-2xl h-[150px]' />
                </figure>
                <div className="card-body -mx-7">
                    <h2 className="card-title"> {title}</h2>
                    <h5 className='text-[#66666A] text-lg font-semibold mt-4'>Price: $ {price}</h5>
                    <div className="card-actions justify-start">
                        <button className="btn btn-outline rounded-full text-[#9538E2] text-lg mt-7">View Details</button>
                    </div>
                </div>
            </div>
        </div>
        </Link>
    );
};


export default Card;



// <div className='grid grid-cols-4 gap-4'>
//                 {/* left section */}
//                 {/* <div className='col-span-1 p-14'>
//                     <div className='border border-[#acacaf] rounded-2xl pt-5 pb-5'>
//                         <ul>
//                             <li className='pt-3'><button className="btn text-[#66666A] rounded-full px-10 ">Laptop</button></li>
//                             <li className='pt-3'><button className="btn text-[#66666A] rounded-full px-10">Mobile</button></li>
//                             <li className='pt-3'><button className="btn text-[#66666A] rounded-full px-10">Accessories</button></li>
//                             <li className='pt-3'><button className="btn text-[#66666A] rounded-full px-10">Samart watch</button></li>
//                             <li className='pt-3'><button className="btn text-[#66666A] rounded-full px-10">Macbook</button></li>

//                         </ul>


//                     </div>

//                 </div> */}
//                 {/* right section */}
//                 <div className='col-span-3'>
//                     <div className='grid grid-cols-3 gap-4'>
//                         <div className="card bg-base-100  shadow-xl mt-2 text-start">
//                             <figure>
//                                 <img
//                                     src={image}
//                                     alt="Shoes" className=' rounded-2xl h-[150px]' />
//                             </figure>
//                             <div className="card-body -mx-7">
//                                 <h2 className="card-title"> {title}</h2>
//                                 <h5 className='text-[#66666A] text-lg font-semibold mt-4'>Price: $ {price}</h5>
//                                 <div className="card-actions justify-start">
//                                     <button className="btn btn-outline rounded-full text-[#9538E2] text-lg mt-7">View Details</button>
//                                 </div>
//                             </div>
//                         </div>
                       
//                     </div>
//                 </div>

//             </div>