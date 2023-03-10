/// <reference types="vitest" />

import path from 'path'
import { defineConfig } from 'vite'
import RecordTime from './src'

// https://vitejs.dev/config/
export default defineConfig({
  plugins:[
    RecordTime()
  ],
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  }
})
