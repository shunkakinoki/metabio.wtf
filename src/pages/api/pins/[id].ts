import Cors from "cors";
import type { NextApiRequest, NextApiResponse } from "next";

import prisma from "@/libs/prisma";
import { runMiddleware } from "@/libs/runMiddleware";

const cors = Cors({
  methods: ["GET", "POST"],
});

export const pins = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await runMiddleware(req, res, cors);

    const id = req.query.id as string;

    switch (req.method) {
      case "GET": {
        const [pins] = await Promise.all([
          prisma.pins.findMany({
            orderBy: [
              {
                id: "asc",
              },
            ],
            where: { walletId: id },
          }),
        ]);

        res.json({
          pins: pins || 0,
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

export default pins;
