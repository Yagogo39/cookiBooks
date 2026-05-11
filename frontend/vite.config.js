import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // o el plugin que uses

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      true
    ]
  }
})
