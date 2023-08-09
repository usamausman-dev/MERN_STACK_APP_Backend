import React, { useContext } from 'react'
import { GlobalContext } from '../Context/context'
import UserNav from './Components/UserNav'
import Brands from './Pages/Brands'
import Category from './Pages/Category'
import Home from './Pages/Home'
import Products from './Pages/Products'
import ProductsByBrand from './Pages/ProductsByBrand'
import Profile from './Pages/Profile'
import ProductsByCategory from './Pages/ProductsByCategory'
import ProductPage from './Pages/ProductPage'
import CustomCart from './Pages/CustomCart'
import { Navigate, Route, Routes } from "react-router-dom";


export default function User() {

    return (

        <>
            <UserNav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/brands" element={<Brands />} />
                <Route path="/cart" element={<CustomCart />} />

                <Route path="/brands/:BrandName" element={<ProductsByBrand />} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/:_id" element={<ProductPage />} />
                <Route path="/category" element={<Category />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/category/:CategoryName" element={<ProductsByCategory />} />
                <Route path="*" element={<Navigate to='/' replace={true} />} />
            </Routes>

        </>
    )
}
