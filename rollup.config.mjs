import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import nodeResolve from '@rollup/plugin-node-resolve'
import commonJs from '@rollup/plugin-commonjs'
import babel from '@rollup/plugin-babel'
import typescript from '@rollup/plugin-typescript'
import { terser } from 'rollup-plugin-terser'
import generateIndexFile from './generateIndexFile.mjs'

import { createRequire } from 'node:module'
const require = createRequire(import.meta.url)
const packageJson = require('./package.json')

/** @type {import('rollup').RollupOptions} */
export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
        name: 'asjuanguilherme-js-utils',
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      generateIndexFile(),
      peerDepsExternal(),
      typescript({ tsconfig: './tsconfig.json' }),
      nodeResolve({
        extensions: ['.ts', '.tsx'],
      }),
      babel(),
      commonJs(),
      terser(),
    ],
  },
]
