/*
  Warnings:

  - You are about to drop the `Pins` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `Pins`;

-- CreateTable
CREATE TABLE `Pin` (
    `id` VARCHAR(191) NOT NULL,
    `index` INTEGER NOT NULL,
    `src` VARCHAR(191),
    `value` VARCHAR(191),
    `type` VARCHAR(191) NOT NULL,
    `walletId` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `Pin_walletId_key`(`walletId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
