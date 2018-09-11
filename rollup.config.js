import postcss from 'rollup-plugin-postcss-modules';
import typescript from 'typescript';
import typescriptPlugin from 'rollup-plugin-typescript2';

export default {
  input: 'src/index.js',
  output: {
    file: 'bsd-overlay.js',
    format: 'iife',
    dir: 'dist',
  },
  plugins: [
    postcss({
      extract: false,
      plugins: [
        require('postcss-nested'),
        require('postcss-color-function'),
        require('postcss-variables')
      ],
      writeDefinitions: true,
    }),
    typescriptPlugin({
      typescript,
      importHelpers: true,
    }),
  ]
}
