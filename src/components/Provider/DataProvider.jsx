import React, { createContext, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const dataContext = createContext([])



const DataProvider = ({children}) => {

    // cart data state
    const [cart, setCart] = useState([]);

    // wishlist data state

    const [wishList, setWishList] = useState([]);

    const AddToCart = (product) => {

       setCart((prevCart) => [...prevCart, product]);
       toast.success('Product successfully added to cart.');

    }

    const handeltotalPrice = () => {
        return cart.reduce((total, product) => total + product.price, 0);
    }

    const AddToWisthlist = (choice) => {

        setWishList((prevWishList) => [...prevWishList, choice]);
        toast.success('Product successfully added to WishList.');

    } 



    return <dataContext.Provider value={{cart, AddToCart,handeltotalPrice,AddToWisthlist, wishList}}> {children} </dataContext.Provider>
};

export default DataProvider;