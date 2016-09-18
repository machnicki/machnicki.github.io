import path from 'path'
import webpack from 'webpack'
import webpackAliases from './webpack-aliases'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import autoprefixer from 'autoprefixer'

import { API_URL, ENVIRONMENT } from './env'

const PATHS = {
  app: path.join(__dirname, 'src'),
  build: path.join(__dirname, 'build'),
}

export default {
  devtool: 'source-map',
  entry: {
    app: ['babel-polyfill', PATHS.app],
  },
  output: {
    path: PATHS.build,
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.DefinePlugin({
      __DEV__: ENVIRONMENT === 'development', // set this variable from outside
      APIUrl: JSON.stringify(API_URL),
    }),
    //new ExtractTextPlugin('style.css', { allChunks: true }),
  ],
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel',
        include: PATHS.app,
      },
      {
        test: /(\.scss|\.css)$/,
        loaders: [
          'style',
          'css?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
          'postcss',
          'sass',
        ],
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
  resolve: {
    alias: webpackAliases,
  },
  postcss: [autoprefixer],
  sassLoader: {
    data: '@import "styles/theme.scss";',
    includePaths: [PATHS.app],
  },
}
