import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/kunalpalasdeokar.github.io/', 
  plugins: [react()],
})
