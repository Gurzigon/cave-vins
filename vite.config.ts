import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    target: 'node18', // Adapté à Railway
    outDir: 'dist',
    ssr: true, // Indique que c'est du server-side
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
