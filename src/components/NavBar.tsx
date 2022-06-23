import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BiSearchAlt } from 'react-icons/bi';
import { BsPlusLg } from 'react-icons/bs';

const NavBar: React.FC = () => {
  return (
    <div className="flex items-center justify-between w-full">
      <ResponsiveSearchButton />
      <ResponsiveLogo />
      <ResponsiveSubmitButton />
    </div>
  );
};

const ResponsiveSearchButton = () => (
  <div className="w-1/3 flex">
    <Link href="/search">
      <a className="btn-pale block sm:hidden p-0 w-12 h-12">
        <div className="flex w-full h-full items-center justify-center">
          <BiSearchAlt className="w-6 h-6" />
        </div>
      </a>
    </Link>
    <Link href="/search">
      <a className="btn-pale hidden sm:block w-28 h-12 font-semibold">
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
          src={require('../assets/apps.svg')}
          alt="Calado's Short Logo"
          width={80}
          height={80}
          priority
        />
      </a>
    </Link>
    <Link href="/">
      <a className="hidden md:block relative">
        <Image
          src={require('../assets/stack-apps-full.svg')}
          alt="Calado's Full Logo"
          width={244.5}
          height={60}
          priority
        />
      </a>
    </Link>
  </div>
);

const ResponsiveSubmitButton = () => (
  <div className="w-1/3 flex justify-end">
    <Link href="/login">
      <a className="btn font-semibold hidden sm:block">
        <div className="flex items-center justify-center">
          <div className="mr-2 ">
            <BsPlusLg />
          </div>
          Envie seu app
        </div>
      </a>
    </Link>
    <Link href="/login">
      <a className="btn block sm:hidden font-semibold p-0 w-12 h-12">
        <div className="flex items-center justify-center w-full h-full">
          <BsPlusLg />
        </div>
      </a>
    </Link>
  </div>
);

export default NavBar;
