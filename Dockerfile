# Utilise une image plus sûre
FROM node:22-alpine

# Dossier de travail
WORKDIR /app

# Copie uniquement les fichiers nécessaires à l'installation
COPY package.json pnpm-lock.yaml ./

# Installe pnpm et les dépendances sans exécuter de scripts
RUN npm install -g pnpm && pnpm install --ignore-scripts

# Copie tout (y compris le dossier prisma)
COPY . .

# On autorise ensuite les scripts de postinstall (prisma generate)
RUN pnpm exec prisma generate

# Build l'app (optionnel selon ton besoin)
RUN pnpm run build

# Lance l'app
CMD ["node", "dist/index.cjs"]
