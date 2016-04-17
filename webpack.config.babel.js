import path from 'path'

const PATHS = {
  app: path.join(__dirname, 'src'),
  build: path.join(__dirname, 'build'),
}

export default {
  devtool: 'source-map',
  entry: {
    app: PATHS.app,
  },
  output: {
    path: PATHS.build,
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel',
        query: {
          presets: [
            'es2015-native-modules',
            'react',
            'react-optimize',
          ],
        },
        include: PATHS.app,
      },
    ],
    preLoaders: [
      {
        test: /\.(js|jsx)$/,
        loaders: ['eslint', 'jscs'],
        include: PATHS.app,
      },
    ],
  },
}
