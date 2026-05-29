import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/autodistrict-app/',
  build: {
    sourcemap: false, // Dit voorkomt het genereren van sourcemaps die 'eval' gebruiken
    minify: 'terser', // Optioneel: zorgt voor een schone, veilige compressie
  },
})
