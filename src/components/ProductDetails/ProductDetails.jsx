import React from 'react';
import { FaCartShopping } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { useLoaderData, useParams } from 'react-router-dom';


const ProductDetails = () => {


    // "id": 16,
    //   "category": "Smart Watch",
    //   "title": "Samsung Galaxy Watch 5",
    //   "price": 299,
    //   "image": "https://i.ibb.co.com/StPDGzD/smart2.webp",
    //   "description": "Samsung Galaxy Watch 5 is a perfect blend of style and functionality. Its 1.4-inch AMOLED display offers sharp visuals, while the BioActive Sensor ensures comprehensive health tracking. With GPS and 5 ATM water resistance, it’s built for all adventures.",
    //   "specifications": [
    //     "1.4-inch AMOLED",
    //     "BioActive Sensor",
    //     "GPS Tracking",
    //     "5 ATM Water Resistance",
    //     "Wear OS 3.5"
    //   ],
    //   "rating": 4.6

    const {id} = useParams();
    const data = useLoaderData();
    const productid = parseInt(id);
    const product = data.find(product => product.id === productid );

    const {image,title, price, description, specifications,rating} = product;


    return (
        <div>
            <div className='bg-[#ECECEC]'>
                <div className='bg-[#9538E2] pb-60'>
                    <h1 className='text-4xl font-bold pt-6 text-white'>Product Details</h1>
                    <p className='mt-2 mx-[15%] text-white'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                </div>
                <div className=' pb-32'>
                    <div className='mx-[10%] text-start '>
                        <div className="hero bg-white rounded-3xl p-7 -mt-[20%]">
                            <div className="hero-content flex-col lg:flex-row ">
                                <img
                                    src={image}
                                    className="max-w-sm h-full rounded-lg shadow-2xl" />
                                <div className='px-14'>
                                    <h1 className="text-3xl font-bold">{title} </h1>
                                    <h5 className='text-xl font-semibold'>Price : $ {price} </h5>
                                    <button class="btn btn-outline bg-[#EAF5E6] btn-success rounded-full px-8 mt-3">In Stock</button>
                                    <p className="py-3"> {description} </p>
                                    <p>
                                        <span className='text-lg font-bold'>Specification:</span>

                                        <ol>
                                            {
                                                specifications.map(specifi => <li> {specifi} </li> )
                                            }
                                           
                                           
                                        </ol>
                                    </p>

                                    <div className='pt-2'>
                                        <p className='text-lg font-bold'>Rating ⭐ </p>

                                        <div className="rating gap-2">
                                            <div>
                                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                                <input
                                                    type="radio"
                                                    name="rating-2"
                                                    className="mask mask-star-2 bg-orange-400"
                                                    defaultChecked />
                                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            </div>
                                            <div>
                                                <p className=' rounded-3xl px-3 bg-[#ECECEC]'> {rating} </p>
                                            </div>
                                        </div>

                                    </div>
                                    <div className='flex items-center gap-4'>
                                        <div className='mt-3'>
                                            <button className='flex items-center gap-2 px-5 py-2 bg-[#8E36D7] rounded-full' > <span className='text-lg font-bold text-white'>Add To Card</span> <span><FaCartShopping className='text-white text-lg' /></span></button>
                                        </div>
                                        <div className='p-2 mt-2  rounded-full border border-gray'>
                                            <FaRegHeart className='text-2xl text-black ' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;