import { NextApiRequest, NextApiResponse } from 'next';
import handleError from '@/controllers/error/handle_error';
import MessageCtrl from '@/controllers/message.ctrl';
import checkSupportMethod from '@/controllers/error/check_support_method';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;
  const supportMethod = ['GET'];
  try {
    checkSupportMethod(supportMethod, method);
    await MessageCtrl.list(req, res);
  } catch (err) {
    console.error(err);
    handleError(err, res);
  }
}
