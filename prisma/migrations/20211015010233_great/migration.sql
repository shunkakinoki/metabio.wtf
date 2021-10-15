/*
  Warnings:

  - A unique constraint covering the columns `[index,walletId]` on the table `Pin` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Pin_index_walletId_key` ON `Pin`(`index`, `walletId`);
