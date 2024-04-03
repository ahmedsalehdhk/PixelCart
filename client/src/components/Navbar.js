import React from 'react'
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className='flex justify-between items-center px-5 lg:px-12 py-8 w-screen border-b bg-white'>
        <div className="nav-links lg:flex gap-5 font-semibold hidden">
          <Link to='/products/women'>Women</Link>
          <Link to='/products/men'>Men</Link>
          <Link to='/products/kids'>Kids</Link>
        </div>
        <div className="logo font-semibold">
          <Link to="/">PIXELCART</Link>
        </div>
        <div className="nav-links lg:flex gap-5 hidden">
          <FaSearch size={25} />
          <Link to='/cart'><FaShoppingCart size={25} /></Link>
        </div>
        <div className="hamburger flex flex-col lg:hidden items-end gap-1">
          <div className="line bg-black w-7 h-0.5"></div>
          <div className="line bg-black w-6 h-0.5"></div>
          <div className="line bg-black w-5 h-0.5"></div>
        </div>
    </div>
  )
}
