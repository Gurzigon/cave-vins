import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    target: 'node18', // Adapté à Railway
    outDir: 'dist',
    ssr: true,
    lib: {
      entry: 'src/index.ts', // Point d'entrée
      formats: ['cjs'], // Format de sortie en CommonJS pour Node.js
    }, // Indique que c'est du server-side
    rollupOptions: {
      input: 'src/index.ts',
      external: [
        '.prisma/client',
        'argon2',
        'zod',
        'hono',
        '@prisma/client',
        // ajoute ici les modules node à ne pas bundler
      ]
    }
  }
})
