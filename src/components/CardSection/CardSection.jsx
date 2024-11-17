import React, { useState } from 'react';
import Card from '../Card/Card';
import Categorys from '../Category/Categorys';
import Cards from '../Cards/Cards';

const CardSection = () => {


    const [selectedCategory,setselectedCategory ] = useState('All');

    const handelCategorySelected = (category) => {
        setselectedCategory(category)
    }


    return (
        <div >
            <div>
            <h1 className='text-4xl font-bold text-center mt-5'>Explore Cutting-Edge Gadgets</h1>
            </div>
           <div  className='grid grid-cols-4 gap-4'>
           <div className='col-span-1'>
           <Categorys handelCategorySelected={handelCategorySelected}></Categorys>
           </div>
           <div  className='col-span-3'> 
           <Cards selectedCategory={selectedCategory}></Cards>
           </div>
           
           </div>
           
        </div>
    );
};

export default CardSection;