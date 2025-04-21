-- CreateTable
CREATE TABLE "Utilisateur" (
    "id" SERIAL NOT NULL,
    "pseudonyme" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "mot_de_passe" TEXT NOT NULL,

    CONSTRAINT "Utilisateur_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Vin" (
    "id" SERIAL NOT NULL,
    "couleur" TEXT NOT NULL,
    "annee" INTEGER NOT NULL,
    "appellation" TEXT,
    "nom" TEXT NOT NULL,
    "quantite" INTEGER NOT NULL,
    "is_consumed" BOOLEAN NOT NULL,
    "favoris" BOOLEAN NOT NULL,

    CONSTRAINT "Vin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cave" (
    "id" SERIAL NOT NULL,
    "nom" TEXT NOT NULL,
    "utilisateurId" INTEGER NOT NULL,

    CONSTRAINT "Cave_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Avis" (
    "id" SERIAL NOT NULL,
    "note" INTEGER NOT NULL,
    "commentaire" TEXT,
    "vinId" INTEGER NOT NULL,
    "caveId" INTEGER,

    CONSTRAINT "Avis_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CaveVin" (
    "caveId" INTEGER NOT NULL,
    "vinId" INTEGER NOT NULL,

    CONSTRAINT "CaveVin_pkey" PRIMARY KEY ("caveId","vinId")
);

-- CreateTable
CREATE TABLE "_CavesVins" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_CavesVins_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "Utilisateur_pseudonyme_key" ON "Utilisateur"("pseudonyme");

-- CreateIndex
CREATE UNIQUE INDEX "Utilisateur_email_key" ON "Utilisateur"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Vin_nom_key" ON "Vin"("nom");

-- CreateIndex
CREATE INDEX "_CavesVins_B_index" ON "_CavesVins"("B");

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
