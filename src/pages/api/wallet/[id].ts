import Cors from "cors";
import type { NextApiRequest, NextApiResponse } from "next";

import prisma from "@/libs/prisma";
import { runMiddleware } from "@/libs/runMiddleware";

const cors = Cors({
  methods: ["GET", "POST"],
});

export const wallet = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await runMiddleware(req, res, cors);

    const id = req.query.id as string;

    switch (req.method) {
      case "GET": {
        const [wallet] = await Promise.all([
          prisma.wallet.findUnique({
            where: { id },
          }),
        ]);

        res.json({
          wallet: wallet,
        });
        return;
      }
      case "POST": {
        const [wallet] = await Promise.all([
          prisma.wallet.upsert({
            where: { id: id },
            create: {
              id: id,
            },
            update: {},
          }),
        ]);

        res.json({
          wallet: wallet,
        });
        return;
      }
    }
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message);

      res.status(500).json({
        statusCode: 500,
        message: err.message,
      });
    }
  }
};

export default wallet;
