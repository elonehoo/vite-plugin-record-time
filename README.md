# vite-plugin-record-time

> Time reporting for Vite project.

## Install

```bash
# npm
npm install --save-dev @elonehoo/vite-plugin-record-time
# yarn
yarn add --dev @elonehoo/vite-plugin-record-time
# pnpm
pnpm install --save-dev @elonehoo/vite-plugin-record-time
```

## Usage

```typescript
//vote.config.ts
import { defineConfig } from 'vite'
import recordTime from '@elonehoo/vite-plugin-record-time'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    recordTime()
  ],
});
```
