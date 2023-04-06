import { NextApiRequest, NextApiResponse } from 'next';
import { fetchQuestions, fetchQuestionsByTag } from '../../lib/api';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method, query } = req;

  try {
    switch (method) {
      case 'GET':
        const tag = query.tag;
        let questions;
        if (tag) {
          questions = await fetchQuestionsByTag(tag as string);
        } else {
          questions = await fetchQuestions();
        }
        res.status(200).json(questions);
        break;
      default:
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Method ${method} Not Allowed`);
    }
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Server Error' });
  }
}
