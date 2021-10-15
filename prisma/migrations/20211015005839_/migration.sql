/*
  Warnings:

  - The primary key for the `Pin` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `Pin` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - The primary key for the `Wallet` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[index]` on the table `Pin` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `Wallet` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `Pin` DROP PRIMARY KEY,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `Wallet` DROP PRIMARY KEY;

-- CreateIndex
CREATE UNIQUE INDEX `Pin_index_key` ON `Pin`(`index`);

-- CreateIndex
CREATE UNIQUE INDEX `Wallet_id_key` ON `Wallet`(`id`);
