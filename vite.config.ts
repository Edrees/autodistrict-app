import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev
export default defineConfig({
  plugins: [react()],
  base: '/autodistrict-app/',
  build: {
    sourcemap: false, // Dit voorkomt de 'eval' CSP-fout
    minify: 'esbuild', // Maakt gebruik van de ingebouwde bundelaar, zodat de Terser-fout verdwijnt
  },
})
