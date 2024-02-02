// para inicializar la configuracion importante

import { defineConfig } from 'vite'
import React from '@vitejs/plugin-react'

export default defineConfig({
  // eslint-disable-next-line comma-dangle
  plugins: [React()],
})
