import React from 'react';

const Categorys = () => {
    return (
        <div>
            <div className=' p-14'>
                <div className='border border-[#acacaf] rounded-2xl pt-5 pb-5'>
                    <ul>
                        <li className='pt-3'><button className="btn text-[#66666A] rounded-full px-10 ">Laptop</button></li>
                        <li className='pt-3'><button className="btn text-[#66666A] rounded-full px-10">Mobile</button></li>
                        <li className='pt-3'><button className="btn text-[#66666A] rounded-full px-10">Accessories</button></li>
                        <li className='pt-3'><button className="btn text-[#66666A] rounded-full px-10">Samart watch</button></li>
                        <li className='pt-3'><button className="btn text-[#66666A] rounded-full px-10">Macbook</button></li>

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Categorys;