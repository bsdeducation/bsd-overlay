import commonjs from 'rollup-plugin-commonjs';
import postcss from 'rollup-plugin-postcss-modules';
import resolve from 'rollup-plugin-node-resolve';
import typescript from 'typescript'
import typescriptPlugin from 'rollup-plugin-typescript2'

export default {
  input: ['src/index.js'],
  experimentalCodeSplitting: true,
  output: [
    {
      format: 'cjs',
      dir: 'dist',
      entryFileNames: '[name].js',
    },
    {
      format: 'es',
      dir: 'dist',
      entryFileNames: '[name].es.js',
    },
  ],
  plugins: [
    resolve({
      //only: [/^\.{0,2}\//],
      jsnext: true,
      main: true,
      browser: true,
    }),
    commonjs({
      inject: false
    }),
    postcss({
      extract: false,
      plugins: [require('postcss-nested')],
      writeDefinitions: true,
    }),
    typescriptPlugin({
      typescript,
      importHelpers: true,
    }),
  ]
}
