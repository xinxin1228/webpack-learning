const path = require('node:path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devServer: {
    port: 8080,
    hot: true,
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [{ test: /\.css$/, use: ['style-loader', 'css-loader'] }],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html'),
    }),
  ],
  resolve: {
    modules: ['./node_modules'],
    extensions: ['.js', '.css'],
  },
}
