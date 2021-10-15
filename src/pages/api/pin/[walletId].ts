import Cors from "cors";
import type { NextApiRequest, NextApiResponse } from "next";
import { v4 as uuidv4 } from "uuid";

import prisma from "@/libs/prisma";
import { runMiddleware } from "@/libs/runMiddleware";
import { galleryKeys } from "@/types/gallery";

const cors = Cors({
  methods: ["GET", "POST"],
});

export const pin = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await runMiddleware(req, res, cors);

    const walletId = req.query.walletId as string;

    switch (req.method) {
      case "GET": {
        const [pins] = await Promise.all([
          prisma.pin.findMany({
            orderBy: [
              {
                id: "asc",
              },
            ],
            where: { walletId: walletId },
          }),
        ]);

        res.json({
          data: pins,
        });
        return;
      }
      case "POST": {
        const { index, type } = req.body as { index: number; type: string };
        const uuid = uuidv4();

        if (!(index >= 0 && index < 6)) {
          throw new Error("Invalid pin index");
        }

        if (!galleryKeys.includes(type)) {
          throw new Error("Invalid type");
        }

        const [wallet] = await Promise.all([
          prisma.wallet.findUnique({
            where: { id: walletId },
          }),
        ]);

        if (!wallet) {
          throw new Error("No wallet recognized");
        }

        const [pin] = await Promise.all([
          prisma.pin.upsert({
            where: { index_walletId: { index: index, walletId: walletId } },
            create: {
              id: uuid,
              index: index,
              walletId: walletId,
              type: type,
            },
            update: {
              id: uuid,
              index: index,
              walletId: walletId,
              type: type,
            },
          }),
        ]);

        res.json({
          data: pin,
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

export default pin;
