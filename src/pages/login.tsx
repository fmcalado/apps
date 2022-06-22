import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

const LoginPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Stack Apps | Login</title>
        <meta
          name="description"
          content="Crie uma conta e compartilhe suas aplicações com todos!."
        />
      </Head>
      <div className="flex justify-center h-full w-full mt-8 bg-[#202033]">
        <div className="flex flex-col items-center w-96 h-[600px] p-5 bg-zinc-500">
          <div className=''>
          <Image
            src={require('../assets/stack-apps-full.svg')}
            alt="Calado's Full Logo"
            width={243}
            height={60}
          />
          </div>
          <div>
            <h1 className="mt-8 mb-3 text text-3xl">Login</h1>
            <p>Acesse sua conta para adicionar e/ou gerenciar seu apps.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
/**import React from 'react';
import Head from 'next/head';
//#202033
//#3a3a42
const LoginPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Stack Apps | Login</title>
        <meta
          name="description"
          content="Crie uma conta e compartilhe suas aplicações com todos!."
        />
      </Head>
      <div className='p-6 h-full w-full bg-[#202033]'>
        <div className='w-full bg-[#3a3a42]'>
          s
        </div>
      </div>
    </>
  );
};

export default LoginPage;
 */
