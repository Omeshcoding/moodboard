/* eslint-disable react/prop-types */
'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from '../Logo';
const Navbar = ({ navlinks }) => {
  const [show, setShow] = useState(false);

  return (
    <nav className="flex justify-center items-center self-stretch md:px-16 py-7 w-full text-white bg-red-900 max-md:px-1 max-md:max-w-full drop-shadow-sm">
      <div className=" relative flex justify-between items-center gap-5 w-full max-w-[1600px] max-md:flex-wrap ">
        <Logo />
        <button
          type="button"
          className={`fixed bg-[#770C15] p-3 rounded-md  sm:right-10 right-2 md:hidden z-50 ${
            !show && 'text-gray-900'
          }`}
          onClick={() => setShow(!show)}
        >
          {!show ? <Menu color="#ede8e8" /> : <X color="#ede8e8" />}
        </button>
        <div className="hidden md:flex gap-5 my-auto lg:text-lg font-semibold  max-md:flex-wrap  ">
          {navlinks.map((item, index) => {
            return (
              <Link
                to={item.link}
                className="grow hover:underline mt-2 transition-all duration-300"
                key={index}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
        <div
          className={`z-40   fixed pt-20 flex flex-col items-center drop-shadow-md  top-0 shadow-md right-0 w-[250px] p-4 pb-10  text-center bg-red-900  lg:text-lg font-semibold   md:hidden ${
            show ? 'translate-x-0' : 'translate-x-[100%]'
          } transition-all duration-300`}
        >
          {navlinks.map((item, index) => {
            return (
              <Link
                to={item.link}
                className="grow hover:underline my-2 transition-all duration-300 "
                key={index}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
