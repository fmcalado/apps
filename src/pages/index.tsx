import axios from 'axios';
import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import AppCard from '../components/AppCard';
import NavBar from '../components/NavBar';
import Separator from '../components/Separator';
import { AppData } from '../lib/types/AppData';

const HomePage: React.FC = () => {
  const [mockApps, setMockApps] = useState<AppData[] | null>(null);
  const [popularApps, setPopularApps] = useState<AppData[] | null>(null);

  useEffect(() => {
    axios.get<AppData[]>('/api/v1/apps').then((res) => {
      const popularApps = res.data.sort(({ views }, { views: viewsB }) => {
        return viewsB - views;
      });

      setPopularApps(popularApps.slice(0, 3));
      setMockApps(res.data);
    });
  }, []);

  return (
    <>
      <Head>
        <title>Stack Apps</title>
        <meta
          name="description"
          content="Um website feito para divulgar aplicações Web e Mobile desenvolvidas por estudantes da Universidade CEUMA."
        />
      </Head>
      <NavBar />
      {/* Popular Section */}
      <h1 className="mt-8 flex flex-col items-center text-3xl md:text-4xl">
        Populares
      </h1>
      <div className="mt-8 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {popularApps !== null ? (
          popularApps.map(({ id, ...rest }) => (
            <AppCard key={id} appData={{ id, ...rest }} />
          ))
        ) : (
          <div>Carregando...</div>
        )}
      </div>
      <Separator />
      {/* App List Section */}
      <h1 className="flex flex-col items-center text-3xl md:text-4xl">
        Lista de Apps
      </h1>
      <div className="mt-8 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {mockApps?.slice(0, 12).map(({ id, ...rest }) => (
          <AppCard key={id} appData={{ id, ...rest }} />
        ))}
      </div>
      {mockApps && mockApps.length >= 12 && (
        <div className="flex items-center justify-center mt-16 w-full">
          <Link href={'/search'}>
            <a className="btn font-semibold">Ver todos os Apps</a>
          </Link>
        </div>
      )}
      <div className="mt-96"/>
    </>
  );
};

export default HomePage;
