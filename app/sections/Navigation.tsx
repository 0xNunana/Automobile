'use client'
import React, { useState } from 'react';
import { paths } from '../Data';
import { Path } from '../Lib';
import Link from 'next/link';
import { FiSearch } from 'react-icons/fi';
import { CiMenuKebab } from 'react-icons/ci';
import { AiOutlineClose } from 'react-icons/ai';

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="bg-[#181818] sticky top-0 z-20 py-2">
      <nav className="flex justify-between items-center max-sm:mx-2 mx-20 text-xl font-semibold text-white">
        <p className="text-[#ff7048] max-sm:text-sm">Nunana Auto</p>

        {/* Mobile menu icon */}
        <div className="lg:hidden">
          <button onClick={toggleMobileMenu}>
            {!isMobileMenuOpen ? ( <CiMenuKebab size={25} />):(<AiOutlineClose  size={25}/>)}
           
          </button>
        </div>

        {/* Desktop navigation links */}
        <ul className="hidden lg:flex flex-grow justify-center">
          {paths.map((item: Path, index: number) => (
            <li className="md:mx-3 xl:mx-7 font-normal" key={index}>
              <Link href="#">{item.title}</Link>
            </li>
          ))}
        </ul>

        {/* Search and login on desktop */}
        <div className="hidden lg:flex justify-between space-x-2">
          <button className="px-2 rounded-sm bg-white flex justify-center items-center">
            <FiSearch color="black" size="28px" />
          </button>
          <button className="bg-[#fe5c3d] rounded-sm px-6 py-2">Log In</button>
        </div>
      </nav>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="bg-[#181818] text-white p-4 absolute right-0 w-full ">
          <ul>
            {paths.map((item: Path, index: number) => (
              <li className="my-2" key={index}>
                <Link href="#">{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navigation;
