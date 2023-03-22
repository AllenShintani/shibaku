// pages/api/signup.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../lib/prisma';
import bcrypt from 'bcrypt';
import axios from 'axios';

export default async function signup(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    try {
      const createdUser = await prisma.user.create({
        data: {
          username,
          password: hashedPassword,
        },
      });

      // Send the request to the backend with axios.
      const response = await axios.post('/api/login', {
        username,
        password,
      });

      // Check if the login was successful.
      if (response.status === 200) {
        res.status(200).json({ message: 'Signup successful' });
      } else {
        res.status(400).json({ message: 'Signup failed' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'An error occurred during signup' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
