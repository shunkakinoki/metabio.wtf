/*
  Warnings:

  - The primary key for the `Pin` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropIndex
DROP INDEX `Wallet_id_key` ON `Wallet`;

-- AlterTable
ALTER TABLE `Pin` DROP PRIMARY KEY,
    MODIFY `id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `Wallet` ADD PRIMARY KEY (`id`);
