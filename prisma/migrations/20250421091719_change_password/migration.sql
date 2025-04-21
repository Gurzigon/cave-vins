/*
  Warnings:

  - The primary key for the `Avis` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Cave` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `CaveVin` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Utilisateur` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `mot_de_passe` on the `Utilisateur` table. All the data in the column will be lost.
  - The primary key for the `Vin` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `_CavesVins` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `password` to the `Utilisateur` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Avis" DROP CONSTRAINT "Avis_caveId_fkey";

-- DropForeignKey
ALTER TABLE "Avis" DROP CONSTRAINT "Avis_vinId_fkey";

-- DropForeignKey
ALTER TABLE "Cave" DROP CONSTRAINT "Cave_utilisateurId_fkey";

-- DropForeignKey
ALTER TABLE "CaveVin" DROP CONSTRAINT "CaveVin_caveId_fkey";

-- DropForeignKey
ALTER TABLE "CaveVin" DROP CONSTRAINT "CaveVin_vinId_fkey";

-- DropForeignKey
ALTER TABLE "_CavesVins" DROP CONSTRAINT "_CavesVins_A_fkey";

-- DropForeignKey
ALTER TABLE "_CavesVins" DROP CONSTRAINT "_CavesVins_B_fkey";

-- AlterTable
ALTER TABLE "Avis" DROP CONSTRAINT "Avis_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "vinId" SET DATA TYPE TEXT,
ALTER COLUMN "caveId" SET DATA TYPE TEXT,
ADD CONSTRAINT "Avis_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Avis_id_seq";

-- AlterTable
ALTER TABLE "Cave" DROP CONSTRAINT "Cave_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "utilisateurId" SET DATA TYPE TEXT,
ADD CONSTRAINT "Cave_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Cave_id_seq";

-- AlterTable
ALTER TABLE "CaveVin" DROP CONSTRAINT "CaveVin_pkey",
ALTER COLUMN "caveId" SET DATA TYPE TEXT,
ALTER COLUMN "vinId" SET DATA TYPE TEXT,
ADD CONSTRAINT "CaveVin_pkey" PRIMARY KEY ("caveId", "vinId");

-- AlterTable
ALTER TABLE "Utilisateur" DROP CONSTRAINT "Utilisateur_pkey",
DROP COLUMN "mot_de_passe",
ADD COLUMN     "password" TEXT NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Utilisateur_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Utilisateur_id_seq";

-- AlterTable
ALTER TABLE "Vin" DROP CONSTRAINT "Vin_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Vin_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Vin_id_seq";

-- AlterTable
ALTER TABLE "_CavesVins" DROP CONSTRAINT "_CavesVins_AB_pkey",
ALTER COLUMN "A" SET DATA TYPE TEXT,
ALTER COLUMN "B" SET DATA TYPE TEXT,
ADD CONSTRAINT "_CavesVins_AB_pkey" PRIMARY KEY ("A", "B");

-- AddForeignKey
ALTER TABLE "Cave" ADD CONSTRAINT "Cave_utilisateurId_fkey" FOREIGN KEY ("utilisateurId") REFERENCES "Utilisateur"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Avis" ADD CONSTRAINT "Avis_vinId_fkey" FOREIGN KEY ("vinId") REFERENCES "Vin"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Avis" ADD CONSTRAINT "Avis_caveId_fkey" FOREIGN KEY ("caveId") REFERENCES "Cave"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CaveVin" ADD CONSTRAINT "CaveVin_caveId_fkey" FOREIGN KEY ("caveId") REFERENCES "Cave"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CaveVin" ADD CONSTRAINT "CaveVin_vinId_fkey" FOREIGN KEY ("vinId") REFERENCES "Vin"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CavesVins" ADD CONSTRAINT "_CavesVins_A_fkey" FOREIGN KEY ("A") REFERENCES "Cave"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CavesVins" ADD CONSTRAINT "_CavesVins_B_fkey" FOREIGN KEY ("B") REFERENCES "Vin"("id") ON DELETE CASCADE ON UPDATE CASCADE;
