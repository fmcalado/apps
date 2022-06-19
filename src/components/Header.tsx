import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BiSearchAlt } from 'react-icons/bi';
import { BsPlusLg } from 'react-icons/bs';

import caladoShortLogo from '../assets/calado.png';
import caladoFullLogo from '../assets/caladoLogo.png';

const ResponsiveSearchButton = () => (
  <div className="w-1/3 flex">
    <Link href="/search">
      <a className="btn-pale block sm:hidden p-0 w-12 h-12 text-white">
        <div className="flex w-full h-full items-center justify-center">
          <BiSearchAlt className="w-6 h-6" />
        </div>
      </a>
    </Link>
    <Link href="/search">
      <a className="btn-pale hidden sm:block w-28 h-12 text-white font-semibold">
        <div className="flex w-full h-full items-center justify-center">
          <div className="mr-1">
            <BiSearchAlt className="w-5 h-5" />
          </div>
          Pesquisar
        </div>
      </a>
    </Link>
  </div>
);

const ResponsiveLogo = () => (
  <div className="w-1/3 flex justify-center">
    <Link href="/">
      <a className="block md:hidden">
        <Image
          src={caladoShortLogo}
          alt="Calado's Short Logo"
          width={64}
          height={64}
        />
      </a>
    </Link>
    <Link href="/">
      <a className="hidden md:block relative">
        <Image
          src={caladoFullLogo}
          alt="Calado's Full Logo"
          width={192}
          height={48}
          layout="raw"
        />
      </a>
    </Link>
  </div>
);

const ResponsiveSubmitButton = () => (
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
      <a className="btn block sm:hidden text-white font-semibold p-0 w-12 h-12">
        <div className="inline-flex justify-center items-center w-full h-full">
          <BsPlusLg />
        </div>
      </a>
    </Link>
  </div>
);

const Header: React.FC = () => {
  return (
    <div className="w-full flex items-center justify-between">
      <ResponsiveSearchButton />
      <ResponsiveLogo />
      <ResponsiveSubmitButton />
    </div>
  );
};

export default Header;
