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

    const walletId = req.query.walletId as string;

    switch (req.method) {
      case "GET": {
        const [wallet] = await Promise.all([
          prisma.wallet.findUnique({
            where: { id: walletId },
          }),
        ]);

        res.json({
          data: wallet,
        });
        return;
      }
      case "POST": {
        const [wallet] = await Promise.all([
          prisma.wallet.upsert({
            where: { id: walletId },
            create: {
              id: walletId,
            },
            update: {},
          }),
        ]);

        res.json({
          data: wallet,
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
