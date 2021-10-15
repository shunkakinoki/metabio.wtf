/*
  Warnings:

  - The primary key for the `Pins` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[walletId]` on the table `Pins` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `Pins` DROP PRIMARY KEY,
    ADD COLUMN `index` INTEGER NOT NULL DEFAULT 0,
    MODIFY `id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- CreateIndex
CREATE UNIQUE INDEX `Pins_walletId_key` ON `Pins`(`walletId`);
