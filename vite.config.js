import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  // Cargar variables de entorno desde el directorio 'config'
  process.env = { ...process.env, ...loadEnv(mode, 'config') }

  return {
    plugins: [react()],
    envDir: './enviroment', // se Especifica la ruta al directorio .env
  }
})