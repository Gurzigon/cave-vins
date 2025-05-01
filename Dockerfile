# Étape 1 : Build
FROM node:23-alpine AS build

WORKDIR /app

COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm && pnpm install

COPY . .

# Build Prisma
RUN pnpm prisma generate
RUN pnpm run migrate:deploy
RUN pnpm run build

# Étape 2 : Runtime
FROM node:23-alpine

WORKDIR /app

COPY --from=build /app /app

ENV NODE_ENV=production

# Prisma ne supporte pas SQLite dans Alpine sans libssl, donc pour PostgreSQL ou MySQL ça va.
RUN pnpm install --prod

CMD ["node", "dist/index.cjs"]
