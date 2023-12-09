import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import nodeResolve from '@rollup/plugin-node-resolve'
import commonJs from '@rollup/plugin-commonjs'
import babel from '@rollup/plugin-babel'
import typescript from '@rollup/plugin-typescript'
import pkg from './package.json' assert { type: 'json' }
import dts from 'rollup-plugin-dts'

/** @type {import('rollup').RollupOptions} */
export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: pkg.types,
      },
    ],
    plugins: [
      dts({
        tsconfig: './tsconfig.json',
      }),
    ],
  },
  {
    input: 'src/index.ts',
    output: [
      {
        file: pkg.main,
        format: 'cjs',
        sourcemap: true,
        name: 'asjuanguilherme-js-utils',
        interop: 'auto',
      },
      {
        file: pkg.module,
        format: 'esm',
        sourcemap: true,
        interop: 'auto',
      },
    ],
    plugins: [
      peerDepsExternal(),
      nodeResolve({
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
      }),
      typescript({
        tsconfig: './tsconfig.json',
        compilerOptions: {
          declaration: false,
          declarationMap: false,
        },
      }),
      commonJs(),
      babel({
        babelHelpers: 'bundled',
        exclude: ['node_modules'],
        presets: ['@babel/preset-react', '@babel/preset-typescript'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      }),
    ],
  },
]
