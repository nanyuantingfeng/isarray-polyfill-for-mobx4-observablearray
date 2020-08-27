import typescript from 'rollup-plugin-typescript2'
import { uglify } from 'rollup-plugin-uglify'

import pkg from './package.json'

export default [
  {
    input: './src/index.ts',
    output: [{ file: pkg.main, format: 'iife' }],
    plugins: [
      typescript({
        check: true,
        typescript: require('typescript'),
        tsconfig: './tsconfig.json'
      }),
      uglify()
    ]
  }
]
