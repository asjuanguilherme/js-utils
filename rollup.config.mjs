import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import nodeResolve from '@rollup/plugin-node-resolve'
import commonJs from '@rollup/plugin-commonjs'
import babel from '@rollup/plugin-babel'
import typescript from '@rollup/plugin-typescript'
import { terser } from 'rollup-plugin-terser'

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
        interop: 'auto',
        globals: {
          react: 'React',
        },
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true,
        interop: 'auto',
        globals: {
          react: 'React',
        },
      },
    ],
    plugins: [
      peerDepsExternal(),
      nodeResolve({
        extensions: ['.ts', '.tsx'],
      }),
      commonJs(),
      typescript({ tsconfig: './tsconfig.json' }),
      babel({
        babelHelpers: 'bundled',
        exclude: ['node_modules'],
        presets: ['@babel/preset-react', '@babel/preset-typescript'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      }),
      terser(),
    ],
  },
]
