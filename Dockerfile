# Étape 1 - Build
FROM node:22-alpine AS builder

WORKDIR /app

# Installer pnpm
RUN npm install -g pnpm

# Copier uniquement les fichiers nécessaires à l'installation
COPY package.json pnpm-lock.yaml ./

# Installer les dépendances
RUN pnpm install

# Copier le reste de l'application
COPY . .

# Générer Prisma Client et compiler le code
RUN pnpm prisma generate
RUN pnpm build

# Étape 2 - Image finale pour exécution
FROM node:22-alpine

WORKDIR /app

# Copier le build et les dépendances depuis l'étape précédente
COPY --from=builder /app /app

# Exposer le port Railway
EXPOSE 8080

# Lancer l'app
CMD ["node", "dist/index.cjs"]
