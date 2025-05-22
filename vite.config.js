// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import {configDefaults} from 'vitest/config'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   test: {
//     globals: true,
//     environment: 'jsdom',
//     setupFiles: './src/setupTests.js',
//     exclude: [...configDefaults.exclude,'e2e/*']
//   }
// })
// vitest.config.js
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.js',
  },
})
