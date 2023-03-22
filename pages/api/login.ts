// pages/api/login.ts
import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    try {
      const user = await prisma.user.findUnique({
        where: { username: req.body.username },
      });

      if (!user) {
        res.status(404).json({ error: "User not found." });
        return;
      }

      if (user.password !== req.body.password) {
        res.status(401).json({ error: "Incorrect password." });
        return;
      }

      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error: "Failed to log in." });
    }
  } else {
    res.status(405).json({ error: "Method not allowed." });
  }
};

export default handler;
