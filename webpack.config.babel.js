import webpack from 'webpack'

export default {
  entry: {
    'index.js': './src/index.js',
  },
  module: {
    preLoaders: [
      test: /\.(js|jsx)$/,
      loaders: ['eslint', 'jscs'],
    ]
  }
}
