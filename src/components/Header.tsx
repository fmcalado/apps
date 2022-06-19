import Link from 'next/link';
import React from 'react';
import { BiSearchAlt } from 'react-icons/bi';
import { BsPlusLg } from 'react-icons/bs';

const Header: React.FC = () => {
  return (
    <div className="w-full flex items-center justify-between">
      {/* Home & Search Buttons */}
      <div className="w-1/3 flex">
        <Link href="/search">
          <a className="btn-pale block md:hidden p-0 sm:w-12 sm:h-12 w-9 h-9 text-white">
            <div className="flex w-full h-full items-center justify-center">
              <BiSearchAlt className='w-5 h-5 sm:w-6 sm:h-6'/>
            </div>
          </a>
        </Link>
        <Link href="/search">
          <a className="btn-pale hidden md:block w-28 h-12 text-white font-semibold">
            <div className="flex w-full h-full items-center justify-center">
              <div className='mr-1'>
                <BiSearchAlt className='w-5 h-5'/>
              </div>
              Pesquisar
            </div>
          </a>
        </Link>
      </div>
      {/* Logo */}
      <div className="w-1/3 flex justify-center">LOGO</div>
      {/* Submit App Button */}
      <div className="w-1/3 flex justify-end">
        <Link href="/login">
          <a className="btn text-white font-semibold hidden sm:block">
            <div className="inline-flex items-center">
              <div className="mr-2">
                <BsPlusLg />
              </div>
              Envie seu app
            </div>
          </a>
        </Link>
        <Link href="/login">
          <a className="btn block sm:hidden text-white font-semibold p-0 w-14 h-10">
            <div className="inline-flex justify-center items-center w-full h-full">
              <BsPlusLg />
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Header;
