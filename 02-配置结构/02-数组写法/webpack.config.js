const path = require('node:path')
const { merge } = require('webpack-merge')

/**
 * @type {import('webpack').Configuration}
 *
 */
// 普通写法
// module.exports = [
//   {
//     mode: 'development',
//     entry: './src/index.js',
//     name: 'commonjs',
//     output: {
//       filename: 'fun-commonjs.js',
//       libraryTarget: 'commonjs',
//     },
//   },
//   {
//     mode: 'development',
//     entry: './src/index.js',
//     name: 'umd',
//     output: {
//       filename: 'fun-umd.js',
//       libraryTarget: 'umd',
//       library: '_', // 浏览器下，使用_作为全局变量访问
//     },
//   },
// ]

// 优化写法
const commConfig = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
  },
}

module.exports = [
  merge(commConfig, {
    name: 'commonjs',
    output: {
      filename: 'fun-commonjs.js',
      libraryTarget: 'commonjs',
    },
  }),
  merge(commConfig, {
    name: 'umd',
    output: {
      filename: 'fun-umd.js',
      libraryTarget: 'umd',
      library: '_', // 浏览器下，使用_作为全局变量访问
    },
  }),
]
