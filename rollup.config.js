import babel from 'rollup-plugin-babel';
import postcss from 'rollup-plugin-postcss-modules';
import {uglify} from "rollup-plugin-uglify";

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
    babel(),
    uglify()
  ]
}
