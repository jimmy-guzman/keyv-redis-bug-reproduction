import { resolve } from 'path'

import { defineConfig } from 'tsup'

export default defineConfig([
  {
    entry: ['server.ts'],
    clean: true,
    splitting: false,
    dts: false,
    tsconfig: resolve(__dirname, './tsconfig.json'),
    target: 'esnext',
    format: 'cjs',
    outDir: 'dist',
    minify: true,
    sourcemap: false,
  },
])
