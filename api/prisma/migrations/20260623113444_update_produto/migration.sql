/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Produto` table. All the data in the column will be lost.
  - You are about to drop the `produtos` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `atualizadoEm` to the `Produto` table without a default value. This is not possible if the table is not empty.
  - Added the required column `categoria` to the `Produto` table without a default value. This is not possible if the table is not empty.
  - Added the required column `estoque` to the `Produto` table without a default value. This is not possible if the table is not empty.
  - Added the required column `marca` to the `Produto` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Produto" DROP COLUMN "createdAt",
ADD COLUMN     "ativo" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "atualizadoEm" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "categoria" TEXT NOT NULL,
ADD COLUMN     "criadoEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "data" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "descricao" TEXT,
ADD COLUMN     "estoque" INTEGER NOT NULL,
ADD COLUMN     "marca" TEXT NOT NULL;

-- DropTable
DROP TABLE "produtos";
