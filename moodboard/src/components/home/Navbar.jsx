'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <nav className="flex justify-center items-center self-stretch md:px-16 py-7 w-full text-white bg-red-900 max-md:px-1 max-md:max-w-full">
      <div className=" relative flex justify-between items-center gap-5 w-full max-w-[1600px] max-md:flex-wrap ">
        <h2 className="flex-auto text-xl sm:text-3xl max-md:pl-4 xl:text-4xl font-medium">
          {' '}
          SubhMangalPlanning{' '}
        </h2>
        <button
          type="button"
          className={`bg-primary p-3 rounded-md fixed sm:right-10 right-2 md:hidden z-50 ${
            !show && 'text-gray-900'
          }`}
          onClick={() => setShow(!show)}
        >
          {!show ? <Menu color="#ede8e8" /> : <X />}
        </button>
        <div className="hidden md:flex gap-5 my-auto lg:text-lg font-semibold uppercase max-md:flex-wrap  ">
          {['Home', 'About us', 'Services', 'Gallery', 'Contact'].map(
            (item, index) => {
              return (
                <Link
                  to="#"
                  className="grow hover:underline mt-2 transition-all duration-300"
                  key={index}
                >
                  {item}
                </Link>
              );
            }
          )}
        </div>
        <div
          className={`fixed pt-20 flex flex-col top-0 shadow-md right-0 w-[250px] p-4 h-[250px] text-center bg-red-900  lg:text-lg font-semibold uppercase  md:hidden ${
            show ? 'translate-x-0' : 'translate-x-[100%]'
          } transition-all duration-300`}
        >
          {['Home', 'About us', 'Services', 'Gallery', 'Contact'].map(
            (item, index) => {
              return (
                <Link
                  to="#"
                  className="grow hover:underline mt-2 transition-all duration-300"
                  key={index}
                >
                  {item}
                </Link>
              );
            }
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
