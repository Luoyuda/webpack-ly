const path = require('path')
const myPlugin = require('./plugins/myPlugin')
module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/gi,
        use: ['aLoader', 'bLoader'],
      },
    ],
  },
  resolveLoader: {
    modules: [path.resolve(__dirname, 'loaders')],
  },
  plugins: [new myPlugin()],
}
