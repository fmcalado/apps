import React from 'react';
import Image from 'next/image';
import { AiOutlineHome } from 'react-icons/ai';
import { BiSearchAlt } from 'react-icons/bi';
import { BsPlusLg } from 'react-icons/bs';

import moonlarLogo from '../assets/moonlar.png';

const Header: React.FC = () => {
  return (
    <div className='w-full flex items-center justify-between'>
      {/* Home & Search Buttons */}
      <div className='w-1/3 flex'>
        <a className='btn-pale inline-flex items-center justify-center p-0 w-9 h-9 md:w-12 md:h-12 text-white mr-2'>
          <div>
            <AiOutlineHome size={20} />
          </div>
        </a>
        <a className='btn-pale inline-flex items-center justify-center p-0 w-9 h-9 md:w-12 md:h-12 text-white'>
          <div>
            <BiSearchAlt size={20} />
          </div>
        </a>
      </div>
      {/* Logo */}
      <div className='w-1/3 flex justify-center'>
        LOGO
      </div>
      {/* Submit App Button */}
      <div className='w-1/3 flex justify-end'>
        <a className='btn text-white font-semibold hidden sm:block'>
          <div className='inline-flex items-center'>
            <div className='mr-2'>
              <BsPlusLg />
            </div>
            Envie seu app
          </div>
        </a>
        <a className='btn block sm:hidden text-white font-semibold p-0 w-14 h-10'>
          <div className='inline-flex justify-center items-center w-full h-full'>
            <BsPlusLg />
          </div>
        </a>
      </div>
    </div>
  );
};

export default Header;
