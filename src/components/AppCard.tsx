import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaRegEye } from 'react-icons/fa';

import { AppData } from '../lib/types/AppData';

interface AppCardData {
  appData: AppData;
}

const AppCard: React.FC<AppCardData> = ({ appData }) => {
  return (
    <Link href={`/apps/${appData.id}`}>
      <a className="h-full">
        <div className="bg-[#202033] flex flex-col h-full border-4 border-[#3a3a42] hover:border-zinc-200 hover:shadow-zinc-200 hover:shadow-md transition ease-in-out rounded-2xl overflow-hidden">
          {/* App's Image */}
          <div className="relative flex-shrink-0 pb-[66.6667%]">
            <div className="absolute w-full h-full object-cover">
              <Image
                src={appData.thumbnailUrl}
                alt={`${appData.title}'s Image`}
                layout="fill"
              />
            </div>
          </div>
          {/* App's INFO */}
          <div className="flex flex-col justify-between h-full p-4 border-t-4 border-[#3a3a42]">
            <h1 className="text-2xl">{appData.title}</h1>
            <p className="break-words flex-1 my-4 leading-5 line-clamp-3">
              {appData.description}
            </p>
            <div className="flex justify-between items-center">
              <div className="flex flex-wrap space-x-2 text-sm font-semibold text-[#55557a]">
                {appData.tags.map((tag) => (
                  <p key={`tag.${appData.id}#${tag}`}>#{tag}</p>
                ))}
              </div>
              <div className="flex items-center flex-shrink-0">
                <FaRegEye />
                <p className="ml-1">{appData.views}</p>
              </div>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default AppCard;
