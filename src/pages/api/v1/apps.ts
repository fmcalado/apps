// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

import { AppData } from '../../../lib/types/AppData';
import { mockApps } from '../../../utils/mock/apps';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<AppData[]>,
) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve(res.status(200).json(mockApps));
    }, 2000);
  });
}
