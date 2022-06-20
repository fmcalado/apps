import Head from 'next/head';

import AppCard from '../components/AppCard';
import Header from '../components/Header';
import Separator from '../components/Separator';

import { mockApps } from '../utils/mock/apps';

const HomePage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Stack Apps</title>
        <meta
          name="description"
          content="Um website feito para divulgar aplicações Web e Mobile desenvolvidad por estudantes da Universidade CEUMA."
        />
      </Head>
      <Header />
      {/* Popular Section */}
      <h1 className="mt-8 flex flex-col items-center text-3xl md:text-4xl">
        Populares
      </h1>
      <div className="mt-8 grid gap-4 grid-cols-1 grid-rows-3 sm:grid-cols-2 sm:grid-rows-2 lg:grid-cols-3 lg:grid-rows-1">
        {mockApps.map(({ id, ...rest }) => (
          <AppCard key={id} appData={{ id, ...rest }} />
        ))}
      </div>
      <Separator />
      {/* App List Section */}
      <h1 className="flex flex-col items-center text-3xl md:text-4xl">
        Lista de Apps
      </h1>
      <div className="mt-12 h-96 w-full bg-[#202033]">
        12 CARD GRID + PAGE SELECTOR GOES HERE
      </div>
    </>
  );
};

export default HomePage;
