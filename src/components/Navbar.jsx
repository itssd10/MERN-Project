import React, { useEffect, useState } from 'react';
import { BiPhoneCall } from "react-icons/bi";
import logo from '/logo 1.png';

const Navbar = () => {
  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 100) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = (
    <>
      <li><a className="text-red">Home</a></li>
      <li tabIndex={0}>
        <details>
          <summary className="text-black">Menu</summary>
          <ul className="p-2">
            <li><a className="text-black" href="/menu">All</a></li>
            <li><a className="text-black">Indian Dish</a></li>
            <li><a className="text-black">Chinese Dish</a></li>
            <li><a className="text-black">Pizzas & Burgers</a></li>
          </ul>
        </details>
      </li>
      <li tabIndex={0}>
        <details>
          <summary className="text-black">Services</summary>
          <ul className="p-2">
            <li><a className="text-black">Online Order</a></li>
            <li><a className="text-black">Table Booking</a></li>
            <li><a className="text-black">Order Tracking</a></li>
          </ul>
        </details>
      </li>
      <li><a className="text-black">Offers</a></li>
    </>
  );

  return (
    <header className="max-w-screen-2xl container mx-auto fixed top-0 left-0 right-0 transition-all duration-300 ease-in-out">
      <div className={`navbar xl:px-24 ${isSticky ? "shadow-md bg-base-100 transition-all duration-300 ease-in-out" : ""}`}>
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              {navItems}
            </ul>
          </div>
          <a href="/"><img src={logo} alt=""/></a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>
        <div className="navbar-end">
          <button className="text-black btn btn-ghost btn-circle hidden lg:flex">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          <label tabIndex={0} className="text-black btn btn-ghost btn-circle hidden lg:flex items-center justify-center mr-3">
            <div className="indicator">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className=" bg-red text-yellow badge badge-sm indicator-item">8</span>
            </div>
          </label>
          <a className="btn bg-red rounded-full px-6 text-yellow flex items-center gap-2"><BiPhoneCall /> Contact</a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
